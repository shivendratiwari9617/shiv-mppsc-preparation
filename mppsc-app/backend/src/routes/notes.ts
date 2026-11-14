import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

// GET /api/notes - list all MPESB note categories with file/read counts
router.get('/', async (_req, res) => {
  const categories = await prisma.noteCategory.findMany({
    orderBy: { orderIndex: 'asc' },
    include: { _count: { select: { files: true } } },
  });

  const results = await Promise.all(
    categories.map(async (c) => {
      const readCount = await prisma.noteFile.count({ where: { categoryId: c.id, isRead: true } });
      return {
        id: c.id,
        code: c.code,
        name: c.name,
        slug: c.slug,
        fileCount: c._count.files,
        readCount,
      };
    })
  );

  res.json(results);
});

// GET /api/notes/categories/:id - category detail with its file list
router.get('/categories/:id', async (req, res) => {
  const id = Number(req.params.id);
  const category = await prisma.noteCategory.findUnique({ where: { id } });
  if (!category) return res.status(404).json({ error: 'Category not found' });

  const files = await prisma.noteFile.findMany({
    where: { categoryId: id },
    orderBy: { orderIndex: 'asc' },
    select: { id: true, title: true, orderIndex: true, isRead: true },
  });

  res.json({ category: { id: category.id, code: category.code, name: category.name }, files });
});

// GET /api/notes/files/:id - single note's full markdown content, with prev/next within its category
router.get('/files/:id', async (req, res) => {
  const id = Number(req.params.id);
  const file = await prisma.noteFile.findUnique({
    where: { id },
    include: { category: { select: { id: true, name: true } } },
  });
  if (!file) return res.status(404).json({ error: 'Note not found' });

  const [prev, next] = await Promise.all([
    prisma.noteFile.findFirst({
      where: { categoryId: file.categoryId, orderIndex: { lt: file.orderIndex } },
      orderBy: { orderIndex: 'desc' },
      select: { id: true, title: true },
    }),
    prisma.noteFile.findFirst({
      where: { categoryId: file.categoryId, orderIndex: { gt: file.orderIndex } },
      orderBy: { orderIndex: 'asc' },
      select: { id: true, title: true },
    }),
  ]);

  res.json({
    id: file.id,
    title: file.title,
    content: file.content,
    isRead: file.isRead,
    category: file.category,
    prev,
    next,
  });
});

// PATCH /api/notes/files/:id/read - mark a note as read/unread
router.patch('/files/:id/read', async (req, res) => {
  const id = Number(req.params.id);
  const isRead = Boolean(req.body?.isRead);
  const file = await prisma.noteFile.update({
    where: { id },
    data: { isRead, readAt: isRead ? new Date() : null },
  });
  res.json({ id: file.id, isRead: file.isRead });
});

export default router;
