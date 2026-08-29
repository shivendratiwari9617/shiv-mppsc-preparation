import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

// GET /api/bookmarks - list all bookmarked questions with topic/unit context
router.get('/', async (_req, res) => {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      question: {
        include: { topic: { include: { unit: { select: { id: true, name: true } } } } },
      },
    },
  });

  res.json(
    bookmarks.map((b) => ({
      id: b.question.id,
      questionText: b.question.questionText,
      options: b.question.options,
      correctIndex: b.question.correctIndex,
      explanation: b.question.explanation,
      priorityTag: b.question.priorityTag,
      topicId: b.question.topicId,
      topicTitle: b.question.topic.title,
      unitName: b.question.topic.unit.name,
      bookmarkedAt: b.createdAt,
    }))
  );
});

// POST /api/bookmarks/:questionId/toggle - add/remove a bookmark
router.post('/:questionId/toggle', async (req, res) => {
  const questionId = Number(req.params.questionId);
  const existing = await prisma.bookmark.findUnique({ where: { questionId } });
  if (existing) {
    await prisma.bookmark.delete({ where: { questionId } });
    return res.json({ bookmarked: false });
  }
  await prisma.bookmark.create({ data: { questionId } });
  res.json({ bookmarked: true });
});

export default router;
