import { Router } from 'express';
import { getAllSettings, setSetting } from '../utils/settings';

const router = Router();

// GET /api/settings
router.get('/', async (_req, res) => {
  const settings = await getAllSettings();
  res.json(settings);
});

// PUT /api/settings - body: { dailyGoal?: string|number }
router.put('/', async (req, res) => {
  const { dailyGoal } = req.body as { dailyGoal?: string | number };
  if (dailyGoal !== undefined) {
    const n = Number(dailyGoal);
    if (!Number.isFinite(n) || n <= 0) return res.status(400).json({ error: 'dailyGoal must be a positive number' });
    await setSetting('dailyGoal', String(Math.round(n)));
  }
  const settings = await getAllSettings();
  res.json(settings);
});

export default router;
