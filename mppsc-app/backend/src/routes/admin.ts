import { Router } from 'express';
import { prisma } from '../db';
import { runImportLogged } from '../import/importContent';

const router = Router();

// POST /api/admin/import - scans the mounted content folder and (re)imports all MCQs.
// Safe to re-run: existing topics/questions are matched by file path + position and updated in place.
router.post('/import', async (req, res) => {
  req.setTimeout(0); // large imports (1000+ files) can take a while
  try {
    const result = await runImportLogged();
    res.json(result);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Import failed' });
  }
});

// GET /api/admin/import/last - most recent import run info
router.get('/import/last', async (_req, res) => {
  const last = await prisma.importLog.findFirst({ orderBy: { startedAt: 'desc' } });
  res.json(last);
});

// GET /api/admin/import/history
router.get('/import/history', async (_req, res) => {
  const rows = await prisma.importLog.findMany({ orderBy: { startedAt: 'desc' }, take: 20 });
  res.json(rows);
});

// DELETE /api/admin/reset-progress - wipes all tracked activity (attempts, sessions,
// review state, bookmarks, daily stats). Content (units/topics/questions) is untouched.
router.delete('/reset-progress', async (_req, res) => {
  await prisma.$transaction([
    prisma.attempt.deleteMany({}),
    prisma.session.deleteMany({}),
    prisma.reviewState.deleteMany({}),
    prisma.bookmark.deleteMany({}),
    prisma.dailyStat.deleteMany({}),
  ]);
  res.json({ ok: true });
});

export default router;
