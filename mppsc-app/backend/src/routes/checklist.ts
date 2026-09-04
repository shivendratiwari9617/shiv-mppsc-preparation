import { Router } from 'express';
import { prisma } from '../db';

const router = Router();

// GET /api/checklist/units - list all syllabus-checklist units with item/checked counts
router.get('/units', async (_req, res) => {
  const units = await prisma.checklistUnit.findMany({
    orderBy: { orderIndex: 'asc' },
    include: { _count: { select: { files: true } } },
  });

  const results = await Promise.all(
    units.map(async (u) => {
      const [itemCount, checkedCount] = await Promise.all([
        prisma.checklistItem.count({ where: { file: { unitId: u.id } } }),
        prisma.checklistItem.count({ where: { file: { unitId: u.id }, isChecked: true } }),
      ]);
      return {
        id: u.id,
        code: u.code,
        name: u.name,
        fileCount: u._count.files,
        itemCount,
        checkedCount,
      };
    })
  );

  res.json(results);
});

// GET /api/checklist/units/:id - unit detail with its file list + per-file counts
router.get('/units/:id', async (req, res) => {
  const id = Number(req.params.id);
  const unit = await prisma.checklistUnit.findUnique({ where: { id } });
  if (!unit) return res.status(404).json({ error: 'Checklist unit not found' });

  const files = await prisma.checklistFile.findMany({
    where: { unitId: id },
    orderBy: { orderIndex: 'asc' },
    include: { _count: { select: { items: true } } },
  });

  const results = await Promise.all(
    files.map(async (f) => {
      const checkedCount = await prisma.checklistItem.count({ where: { fileId: f.id, isChecked: true } });
      return {
        id: f.id,
        title: f.title,
        groupLabel: f.groupLabel,
        itemCount: f._count.items,
        checkedCount,
      };
    })
  );

  res.json({ unit: { id: unit.id, code: unit.code, name: unit.name }, files: results });
});

// GET /api/checklist/files/:id - a single checklist file's items
router.get('/files/:id', async (req, res) => {
  const id = Number(req.params.id);
  const file = await prisma.checklistFile.findUnique({
    where: { id },
    include: { unit: { select: { id: true, name: true } } },
  });
  if (!file) return res.status(404).json({ error: 'Checklist file not found' });

  const items = await prisma.checklistItem.findMany({
    where: { fileId: id },
    orderBy: { orderIndex: 'asc' },
    select: { id: true, label: true, text: true, heading: true, isChecked: true },
  });

  res.json({
    file: { id: file.id, title: file.title, groupLabel: file.groupLabel, unit: file.unit },
    items,
  });
});

// PATCH /api/checklist/items/:id/check - mark a single item studied / not studied
router.patch('/items/:id/check', async (req, res) => {
  const id = Number(req.params.id);
  const isChecked = Boolean(req.body?.isChecked);
  const item = await prisma.checklistItem.update({
    where: { id },
    data: { isChecked, checkedAt: isChecked ? new Date() : null },
  });
  res.json({ id: item.id, isChecked: item.isChecked });
});

// PATCH /api/checklist/files/:id/check-all - mark every item in a file studied / not studied
router.patch('/files/:id/check-all', async (req, res) => {
  const id = Number(req.params.id);
  const isChecked = Boolean(req.body?.isChecked);
  await prisma.checklistItem.updateMany({
    where: { fileId: id },
    data: { isChecked, checkedAt: isChecked ? new Date() : null },
  });
  res.json({ ok: true });
});

export default router;
