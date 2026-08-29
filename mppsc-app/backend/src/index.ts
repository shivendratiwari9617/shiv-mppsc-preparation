import express from 'express';
import cors from 'cors';

import unitsRouter from './routes/units';
import topicsRouter from './routes/topics';
import sessionsRouter from './routes/sessions';
import bookmarksRouter from './routes/bookmarks';
import reviewRouter from './routes/review';
import searchRouter from './routes/search';
import statsRouter from './routes/stats';
import settingsRouter from './routes/settings';
import adminRouter from './routes/admin';

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/units', unitsRouter);
app.use('/api/topics', topicsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/bookmarks', bookmarksRouter);
app.use('/api/review', reviewRouter);
app.use('/api/search', searchRouter);
app.use('/api/stats', statsRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/admin', adminRouter);

app.use((req, res) => {
  res.status(404).json({ error: `Not found: ${req.method} ${req.path}` });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: err?.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`MPPSC backend listening on port ${PORT}`);
});
