import { Router } from 'express';
import { prisma } from '../db';
import { getSetting } from '../utils/settings';

const router = Router();

async function computeStreak(): Promise<number> {
  const stats = await prisma.dailyStat.findMany({
    where: { questionsAttempted: { gt: 0 } },
    select: { date: true },
    orderBy: { date: 'desc' },
    take: 400,
  });
  const activeDates = new Set(stats.map((s) => s.date.toISOString().slice(0, 10)));

  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  // If today has no activity yet, start counting from yesterday so the streak
  // from previous days isn't shown as broken before the day is even over.
  if (!activeDates.has(cursor.toISOString().slice(0, 10))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (activeDates.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

// GET /api/stats/overview - dashboard summary
router.get('/overview', async (_req, res) => {
  const [totalUnits, totalTopics, totalQuestions] = await Promise.all([
    prisma.unit.count(),
    prisma.topic.count(),
    prisma.question.count(),
  ]);

  const agg = await prisma.reviewState.aggregate({
    _count: { _all: true },
    _sum: { timesCorrect: true, timesWrong: true },
  });
  const attemptedQuestions = agg._count._all;
  const correct = agg._sum.timesCorrect || 0;
  const wrong = agg._sum.timesWrong || 0;
  const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStat = await prisma.dailyStat.findUnique({ where: { date: today } });
  const dailyGoal = Number(await getSetting('dailyGoal'));

  const [wrongCount, dueCount, bookmarksCount, streak] = await Promise.all([
    prisma.reviewState.count({ where: { timesWrong: { gt: 0 } } }),
    prisma.reviewState.count({ where: { nextDueAt: { lte: new Date() } } }),
    prisma.bookmark.count(),
    computeStreak(),
  ]);

  res.json({
    totalUnits,
    totalTopics,
    totalQuestions,
    attemptedQuestions,
    accuracy,
    currentStreak: streak,
    todayAttempted: todayStat?.questionsAttempted || 0,
    dailyGoal,
    goalMet: todayStat?.goalMet || false,
    wrongDeckCount: wrongCount,
    dueCount,
    bookmarksCount,
  });
});

// GET /api/stats/daily?days=90 - activity for heatmap + trend chart
router.get('/daily', async (req, res) => {
  const days = Math.min(Number(req.query.days) || 90, 365);
  const from = new Date();
  from.setHours(0, 0, 0, 0);
  from.setDate(from.getDate() - days + 1);

  const rows = await prisma.dailyStat.findMany({
    where: { date: { gte: from } },
    orderBy: { date: 'asc' },
  });
  const byDate = new Map(rows.map((r) => [r.date.toISOString().slice(0, 10), r]));

  const out = [];
  const cursor = new Date(from);
  for (let i = 0; i < days; i++) {
    const key = cursor.toISOString().slice(0, 10);
    const r = byDate.get(key);
    out.push({
      date: key,
      questionsAttempted: r?.questionsAttempted || 0,
      correctCount: r?.correctCount || 0,
      wrongCount: r?.wrongCount || 0,
      goalMet: r?.goalMet || false,
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  res.json(out);
});

// GET /api/stats/units - per-unit accuracy breakdown (bar chart)
router.get('/units', async (_req, res) => {
  const units = await prisma.unit.findMany({ orderBy: { orderIndex: 'asc' } });
  const results = await Promise.all(
    units.map(async (u) => {
      const questionCount = await prisma.question.count({ where: { topic: { unitId: u.id } } });
      const agg = await prisma.reviewState.aggregate({
        where: { question: { topic: { unitId: u.id } } },
        _count: { _all: true },
        _sum: { timesCorrect: true, timesWrong: true },
      });
      const attempted = agg._count._all;
      const correct = agg._sum.timesCorrect || 0;
      const wrong = agg._sum.timesWrong || 0;
      const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
      return { unitId: u.id, name: u.name, questionCount, attempted, accuracy };
    })
  );
  res.json(results);
});

// GET /api/stats/priority - accuracy grouped by priority tag
router.get('/priority', async (_req, res) => {
  const tags = ['VERY_HIGH', 'HIGH', 'MEDIUM', 'LOW'];
  const results = await Promise.all(
    tags.map(async (tag) => {
      const questionCount = await prisma.question.count({ where: { priorityTag: tag } });
      const agg = await prisma.reviewState.aggregate({
        where: { question: { priorityTag: tag } },
        _count: { _all: true },
        _sum: { timesCorrect: true, timesWrong: true },
      });
      const attempted = agg._count._all;
      const correct = agg._sum.timesCorrect || 0;
      const wrong = agg._sum.timesWrong || 0;
      const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
      return { priorityTag: tag, questionCount, attempted, accuracy };
    })
  );
  res.json(results);
});

export default router;
