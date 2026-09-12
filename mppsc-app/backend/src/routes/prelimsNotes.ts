import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

// GET /api/prelims-notes - list all Prelims-notes units with topic/note/read counts
router.get('/', async (_req, res) => {
  const units = await prisma.prelimsNoteUnit.findMany({
    orderBy: { orderIndex: 'asc' },
    include: { _count: { select: { topics: true } } },
  });

  const results = await Promise.all(
    units.map(async (u) => {
      const [noteCount, readCount] = await Promise.all([
        prisma.prelimsNoteFile.count({ where: { topic: { unitId: u.id } } }),
        prisma.prelimsNoteFile.count({ where: { topic: { unitId: u.id }, isRead: true } }),
      ]);
      return {
        id: u.id,
        code: u.code,
        name: u.name,
        topicCount: u._count.topics,
        noteCount,
        readCount,
      };
    })
  );

  res.json(results);
});

// GET /api/prelims-notes/units/:id - unit detail with its topic list + per-topic counts
router.get('/units/:id', async (req, res) => {
  const id = Number(req.params.id);
  const unit = await prisma.prelimsNoteUnit.findUnique({ where: { id } });
  if (!unit) return res.status(404).json({ error: 'Prelims-notes unit not found' });

  const topics = await prisma.prelimsNoteTopic.findMany({
    where: { unitId: id },
    orderBy: { orderIndex: 'asc' },
    include: { _count: { select: { files: true } } },
  });

  const results = await Promise.all(
    topics.map(async (t) => {
      const readCount = await prisma.prelimsNoteFile.count({ where: { topicId: t.id, isRead: true } });
      return {
        id: t.id,
        title: t.title,
        groupLabel: t.groupLabel,
        noteCount: t._count.files,
        readCount,
      };
    })
  );

  res.json({ unit: { id: unit.id, code: unit.code, name: unit.name }, topics: results });
});

// GET /api/prelims-notes/topics/:id - a single topic's note list
router.get('/topics/:id', async (req, res) => {
  const id = Number(req.params.id);
  const topic = await prisma.prelimsNoteTopic.findUnique({
    where: { id },
    include: { unit: { select: { id: true, name: true } } },
  });
  if (!topic) return res.status(404).json({ error: 'Prelims-notes topic not found' });

  const files = await prisma.prelimsNoteFile.findMany({
    where: { topicId: id },
    orderBy: { orderIndex: 'asc' },
    select: { id: true, title: true, orderIndex: true, isRead: true },
  });

  res.json({
    topic: { id: topic.id, title: topic.title, groupLabel: topic.groupLabel, unit: topic.unit },
    files,
  });
});

// GET /api/prelims-notes/files/:id - single note's full markdown content, with prev/next within its topic
router.get('/files/:id', async (req, res) => {
  const id = Number(req.params.id);
  const file = await prisma.prelimsNoteFile.findUnique({
    where: { id },
    include: { topic: { select: { id: true, title: true, unit: { select: { id: true, name: true } } } } },
  });
  if (!file) return res.status(404).json({ error: 'Note not found' });

  const [prev, next] = await Promise.all([
    prisma.prelimsNoteFile.findFirst({
      where: { topicId: file.topicId, orderIndex: { lt: file.orderIndex } },
      orderBy: { orderIndex: 'desc' },
      select: { id: true, title: true },
    }),
    prisma.prelimsNoteFile.findFirst({
      where: { topicId: file.topicId, orderIndex: { gt: file.orderIndex } },
      orderBy: { orderIndex: 'asc' },
      select: { id: true, title: true },
    }),
  ]);

  res.json({
    id: file.id,
    title: file.title,
    content: file.content,
    isRead: file.isRead,
    topic: file.topic,
    prev,
    next,
  });
});

// PATCH /api/prelims-notes/files/:id/read - mark a note as read/unread
router.patch('/files/:id/read', async (req, res) => {
  const id = Number(req.params.id);
  const isRead = Boolean(req.body?.isRead);
  const file = await prisma.prelimsNoteFile.update({
    where: { id },
    data: { isRead, readAt: isRead ? new Date() : null },
  });
  res.json({ id: file.id, isRead: file.isRead });
});

export default router;
