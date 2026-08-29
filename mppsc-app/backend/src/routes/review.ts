import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

function serializeReviewQuestion(rs: any) {
  return {
    id: rs.question.id,
    questionText: rs.question.questionText,
    options: rs.question.options,
    correctIndex: rs.question.correctIndex,
    explanation: rs.question.explanation,
    priorityTag: rs.question.priorityTag,
    topicId: rs.question.topicId,
    topicTitle: rs.question.topic.title,
    unitName: rs.question.topic.unit.name,
    box: rs.box,
    timesWrong: rs.timesWrong,
    timesCorrect: rs.timesCorrect,
    nextDueAt: rs.nextDueAt,
  };
}

const includeQuestion = {
  question: { include: { topic: { include: { unit: { select: { name: true } } } } } },
};

// GET /api/review/wrong - questions ever answered incorrectly (mistake deck)
router.get('/wrong', async (_req, res) => {
  const rows = await prisma.reviewState.findMany({
    where: { timesWrong: { gt: 0 } },
    orderBy: { lastAttemptAt: 'desc' },
    include: includeQuestion,
  });
  res.json(rows.map(serializeReviewQuestion));
});

// GET /api/review/due - questions due for spaced-repetition review today
router.get('/due', async (_req, res) => {
  const rows = await prisma.reviewState.findMany({
    where: { nextDueAt: { lte: new Date() } },
    orderBy: { nextDueAt: 'asc' },
    include: includeQuestion,
  });
  res.json(rows.map(serializeReviewQuestion));
});

// GET /api/review/counts - quick counts for dashboard cards
router.get('/counts', async (_req, res) => {
  const [wrong, due, bookmarks] = await Promise.all([
    prisma.reviewState.count({ where: { timesWrong: { gt: 0 } } }),
    prisma.reviewState.count({ where: { nextDueAt: { lte: new Date() } } }),
    prisma.bookmark.count(),
  ]);
  res.json({ wrong, due, bookmarks });
});

export default router;
