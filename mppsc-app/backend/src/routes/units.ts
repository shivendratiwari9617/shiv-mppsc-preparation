import { Router } from 'express';
import { prisma } from '../db';
import { getUnitStats } from '../utils/statsHelpers';

const router = Router();

// GET /api/units - list all units with topic/question counts + progress stats
router.get('/', async (_req, res) => {
  const units = await prisma.unit.findMany({
    orderBy: { orderIndex: 'asc' },
    include: { _count: { select: { topics: true } } },
  });

  const results = await Promise.all(
    units.map(async (u) => {
      const stats = await getUnitStats(u.id);
      return {
        id: u.id,
        code: u.code,
        name: u.name,
        slug: u.slug,
        topicCount: u._count.topics,
        ...stats,
      };
    })
  );

  res.json(results);
});

// GET /api/units/:id - unit detail with topic list + per-topic stats
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const unit = await prisma.unit.findUnique({ where: { id } });
  if (!unit) return res.status(404).json({ error: 'Unit not found' });

  const topics = await prisma.topic.findMany({
    where: { unitId: id },
    orderBy: { id: 'asc' },
    include: { _count: { select: { questions: true } } },
  });

  // compute per-topic stats efficiently (avoid N+1 aggregate calls by querying reviewState directly)
  const topicIds = topics.map((t) => t.id);
  const reviewRows = await prisma.reviewState.findMany({
    where: { question: { topicId: { in: topicIds } } },
    select: { timesCorrect: true, timesWrong: true, question: { select: { topicId: true } } },
  });
  const byTopic = new Map<number, { attempted: number; correct: number; wrong: number }>();
  for (const t of topicIds) byTopic.set(t, { attempted: 0, correct: 0, wrong: 0 });
  for (const r of reviewRows) {
    const bucket = byTopic.get(r.question.topicId)!;
    bucket.attempted += 1;
    bucket.correct += r.timesCorrect;
    bucket.wrong += r.timesWrong;
  }

  const unitStats = await getUnitStats(id);

  res.json({
    unit: { id: unit.id, code: unit.code, name: unit.name, slug: unit.slug },
    stats: unitStats,
    topics: topics.map((t) => {
      const b = byTopic.get(t.id)!;
      const accuracy = b.correct + b.wrong > 0 ? Math.round((b.correct / (b.correct + b.wrong)) * 100) : 0;
      return {
        id: t.id,
        title: t.title,
        coverageNote: t.coverageNote,
        questionCount: t._count.questions,
        attempted: b.attempted,
        accuracy,
      };
    }),
  });
});

export default router;
