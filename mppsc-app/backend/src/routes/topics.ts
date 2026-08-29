import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

// GET /api/topics/:id - full topic detail incl. questions, bookmark + review state per question
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const topic = await prisma.topic.findUnique({
    where: { id },
    include: { unit: { select: { id: true, name: true, code: true } } },
  });
  if (!topic) return res.status(404).json({ error: 'Topic not found' });

  const questions = await prisma.question.findMany({
    where: { topicId: id },
    orderBy: { orderIndex: 'asc' },
    include: { bookmark: true, reviewState: true },
  });

  res.json({
    topic: {
      id: topic.id,
      title: topic.title,
      coverageNote: topic.coverageNote,
      vyakhya: topic.vyakhya,
      unit: topic.unit,
    },
    questions: questions.map((q) => ({
      id: q.id,
      orderIndex: q.orderIndex,
      questionText: q.questionText,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      priorityTag: q.priorityTag,
      bookmarked: !!q.bookmark,
      reviewState: q.reviewState
        ? {
            box: q.reviewState.box,
            timesWrong: q.reviewState.timesWrong,
            timesCorrect: q.reviewState.timesCorrect,
            nextDueAt: q.reviewState.nextDueAt,
          }
        : null,
    })),
  });
});

export default router;
