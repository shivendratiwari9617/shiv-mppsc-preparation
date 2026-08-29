import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

// GET /api/search?q=...&limit=50
router.get('/', async (req, res) => {
  const q = String(req.query.q || '').trim();
  const limit = Math.min(Number(req.query.limit) || 50, 100);
  if (q.length < 2) return res.json([]);

  const rows = await prisma.question.findMany({
    where: { questionText: { contains: q, mode: 'insensitive' } },
    take: limit,
    include: { topic: { include: { unit: { select: { name: true } } } } },
  });

  res.json(
    rows.map((q2) => ({
      id: q2.id,
      questionText: q2.questionText,
      options: q2.options,
      correctIndex: q2.correctIndex,
      explanation: q2.explanation,
      priorityTag: q2.priorityTag,
      topicId: q2.topicId,
      topicTitle: q2.topic.title,
      unitName: q2.topic.unit.name,
    }))
  );
});

export default router;
