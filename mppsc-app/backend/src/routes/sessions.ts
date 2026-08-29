import { Router } from 'express';
import { prisma } from '../db';
import { shuffleArray } from '../utils/shuffle';
import { nextBoxAfter, computeNextDueDate } from '../utils/leitner';
import { getSetting, startOfDay } from '../utils/settings';

const router = Router();

interface CreateSessionBody {
  mode: 'PRACTICE' | 'MOCK' | 'WRONG_DECK' | 'DUE' | 'BOOKMARKS' | 'CUSTOM';
  unitId?: number;
  topicId?: number;
  priorityTags?: string[];
  count?: number;
  shuffle?: boolean;
  timeLimitSec?: number;
  questionIds?: number[];
}

async function resolveQuestionIds(body: CreateSessionBody): Promise<number[]> {
  if (Array.isArray(body.questionIds) && body.questionIds.length) {
    return body.questionIds.map(Number);
  }

  const questionWhere: Record<string, any> = {};
  if (body.topicId) questionWhere.topicId = Number(body.topicId);
  if (body.unitId) questionWhere.topic = { unitId: Number(body.unitId) };
  if (Array.isArray(body.priorityTags) && body.priorityTags.length) {
    questionWhere.priorityTag = { in: body.priorityTags };
  }
  const hasFilter = Object.keys(questionWhere).length > 0;

  if (body.mode === 'WRONG_DECK') {
    const rows = await prisma.reviewState.findMany({
      where: { timesWrong: { gt: 0 }, ...(hasFilter ? { question: questionWhere } : {}) },
      select: { questionId: true },
    });
    return rows.map((r) => r.questionId);
  }

  if (body.mode === 'DUE') {
    const rows = await prisma.reviewState.findMany({
      where: { nextDueAt: { lte: new Date() }, ...(hasFilter ? { question: questionWhere } : {}) },
      select: { questionId: true },
    });
    return rows.map((r) => r.questionId);
  }

  if (body.mode === 'BOOKMARKS') {
    const rows = await prisma.bookmark.findMany({
      where: hasFilter ? { question: questionWhere } : {},
      select: { questionId: true },
    });
    return rows.map((r) => r.questionId);
  }

  // PRACTICE / MOCK: pull directly from questions table
  const rows = await prisma.question.findMany({
    where: questionWhere,
    select: { id: true },
    orderBy: { orderIndex: 'asc' },
  });
  let ids = rows.map((r) => r.id);
  if (body.shuffle || body.mode === 'MOCK') ids = shuffleArray(ids);
  if (body.count) ids = ids.slice(0, Number(body.count));
  return ids;
}

// POST /api/sessions - create a new practice/mock/review session
router.post('/', async (req, res) => {
  const body = req.body as CreateSessionBody;
  if (!body.mode) return res.status(400).json({ error: 'mode is required' });

  const ids = await resolveQuestionIds(body);
  if (!ids.length) {
    return res.status(400).json({ error: 'No questions matched the given filters.' });
  }

  const questions = await prisma.question.findMany({
    where: { id: { in: ids } },
    include: { topic: { select: { title: true, unitId: true } }, bookmark: true },
  });
  const order = new Map(ids.map((id, i) => [id, i]));
  questions.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0));

  const session = await prisma.session.create({
    data: {
      mode: body.mode,
      unitId: body.unitId ? Number(body.unitId) : null,
      topicId: body.topicId ? Number(body.topicId) : null,
      priorityFilter: Array.isArray(body.priorityTags) ? body.priorityTags.join(',') : null,
      totalQuestions: questions.length,
      timeLimitSec: body.timeLimitSec ? Number(body.timeLimitSec) : null,
    },
  });

  res.json({
    session,
    questions: questions.map((q) => ({
      id: q.id,
      questionText: q.questionText,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      priorityTag: q.priorityTag,
      topicTitle: q.topic.title,
      bookmarked: !!q.bookmark,
    })),
  });
});

// POST /api/sessions/:id/attempts - record an answer for a question in this session
router.post('/:id/attempts', async (req, res) => {
  const sessionId = Number(req.params.id);
  const { questionId, selectedIndex, timeTakenMs } = req.body as {
    questionId: number;
    selectedIndex: number | null;
    timeTakenMs?: number;
  };

  const question = await prisma.question.findUnique({ where: { id: Number(questionId) } });
  if (!question) return res.status(404).json({ error: 'Question not found' });

  const answered = selectedIndex !== null && selectedIndex !== undefined;
  const isCorrect = answered && Number(selectedIndex) === question.correctIndex;

  await prisma.attempt.create({
    data: {
      sessionId,
      questionId: question.id,
      selectedIndex: answered ? Number(selectedIndex) : null,
      isCorrect,
      timeTakenMs: timeTakenMs ?? null,
    },
  });

  await prisma.session.update({
    where: { id: sessionId },
    data: isCorrect
      ? { correctCount: { increment: 1 } }
      : answered
        ? { wrongCount: { increment: 1 } }
        : { skippedCount: { increment: 1 } },
  });

  const existingRS = await prisma.reviewState.findUnique({ where: { questionId: question.id } });
  const nextBox = nextBoxAfter(existingRS?.box, isCorrect);
  const nextDueAt = computeNextDueDate(nextBox);

  await prisma.reviewState.upsert({
    where: { questionId: question.id },
    update: {
      box: nextBox,
      lastResult: isCorrect,
      lastAttemptAt: new Date(),
      nextDueAt,
      timesWrong: { increment: isCorrect ? 0 : 1 },
      timesCorrect: { increment: isCorrect ? 1 : 0 },
    },
    create: {
      questionId: question.id,
      box: nextBox,
      lastResult: isCorrect,
      lastAttemptAt: new Date(),
      nextDueAt,
      timesWrong: isCorrect ? 0 : 1,
      timesCorrect: isCorrect ? 1 : 0,
    },
  });

  // Update today's daily stat (used for streak + goal tracking)
  const today = startOfDay();
  const goal = Number(await getSetting('dailyGoal'));
  const existingDay = await prisma.dailyStat.findUnique({ where: { date: today } });
  const questionsAttempted = (existingDay?.questionsAttempted || 0) + 1;
  const correctCount = (existingDay?.correctCount || 0) + (isCorrect ? 1 : 0);
  const wrongCount = (existingDay?.wrongCount || 0) + (!isCorrect && answered ? 1 : 0);
  await prisma.dailyStat.upsert({
    where: { date: today },
    update: { questionsAttempted, correctCount, wrongCount, goalMet: questionsAttempted >= goal },
    create: { date: today, questionsAttempted, correctCount, wrongCount, goalMet: questionsAttempted >= goal },
  });

  res.json({ isCorrect, correctIndex: question.correctIndex, explanation: question.explanation });
});

// POST /api/sessions/:id/finish - mark session as finished
router.post('/:id/finish', async (req, res) => {
  const id = Number(req.params.id);
  const session = await prisma.session.update({ where: { id }, data: { finishedAt: new Date() } });
  res.json(session);
});

// GET /api/sessions/:id - session summary + all attempts (for results/review page)
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const session = await prisma.session.findUnique({ where: { id } });
  if (!session) return res.status(404).json({ error: 'Session not found' });

  const attempts = await prisma.attempt.findMany({
    where: { sessionId: id },
    orderBy: { id: 'asc' },
    include: { question: { include: { topic: { select: { title: true } } } } },
  });

  res.json({
    session,
    attempts: attempts.map((a) => ({
      id: a.id,
      questionId: a.questionId,
      questionText: a.question.questionText,
      options: a.question.options,
      correctIndex: a.question.correctIndex,
      explanation: a.question.explanation,
      topicTitle: a.question.topic.title,
      selectedIndex: a.selectedIndex,
      isCorrect: a.isCorrect,
    })),
  });
});

// GET /api/sessions?limit=10 - recent session history
router.get('/', async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 10, 50);
  const sessions = await prisma.session.findMany({
    orderBy: { startedAt: 'desc' },
    take: limit,
  });

  const unitIds = [...new Set(sessions.map((s) => s.unitId).filter((v): v is number => v != null))];
  const topicIds = [...new Set(sessions.map((s) => s.topicId).filter((v): v is number => v != null))];
  const [units, topics] = await Promise.all([
    prisma.unit.findMany({ where: { id: { in: unitIds } }, select: { id: true, name: true } }),
    prisma.topic.findMany({ where: { id: { in: topicIds } }, select: { id: true, title: true } }),
  ]);
  const unitMap = new Map(units.map((u) => [u.id, u.name]));
  const topicMap = new Map(topics.map((t) => [t.id, t.title]));

  res.json(
    sessions.map((s) => ({
      ...s,
      unitName: s.unitId ? unitMap.get(s.unitId) ?? null : null,
      topicTitle: s.topicId ? topicMap.get(s.topicId) ?? null : null,
    }))
  );
});

export default router;
