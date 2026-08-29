import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api, OverviewStats, UnitSummary } from '../api/client';
import { Loading, ErrorState } from '../components/Feedback';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import { useStartSession } from '../hooks/useStartSession';

export default function HomePage() {
  const overviewQ = useQuery({
    queryKey: ['stats', 'overview'],
    queryFn: async () => (await api.get<OverviewStats>('/stats/overview')).data,
  });
  const unitsQ = useQuery({
    queryKey: ['units'],
    queryFn: async () => (await api.get<UnitSummary[]>('/units')).data,
  });

  const queryClient = useQueryClient();
  const [importLog, setImportLog] = useState<string | null>(null);
  const importMutation = useMutation({
    mutationFn: async () => (await api.post('/admin/import')).data,
    onSuccess: (data: any) => {
      setImportLog(
        `Imported ${data.unitsFound} units, ${data.topicsFound} topics, ${data.questionsFound} questions.` +
          (data.errors?.length ? ` (${data.errors.length} warnings)` : '')
      );
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['units'] });
    },
  });

  const startSession = useStartSession();

  if (overviewQ.isLoading || unitsQ.isLoading) return <Loading label="Loading dashboard…" />;
  if (overviewQ.isError || unitsQ.isError) return <ErrorState message="Could not load dashboard data." />;

  const stats = overviewQ.data!;
  const units = unitsQ.data!;
  const goalPct = stats.dailyGoal > 0 ? Math.min(100, Math.round((stats.todayAttempted / stats.dailyGoal) * 100)) : 0;

  return (
    <div className="space-y-8">
      {units.length === 0 && (
        <div className="card p-8 text-center space-y-3 border-brand-200 dark:border-brand-800">
          <div className="text-3xl">📥</div>
          <h2 className="text-lg font-bold">No content imported yet</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Click below to scan the mounted MCQ content folder and import all units, topics and questions into the
            database.
          </p>
          <button className="btn-primary" disabled={importMutation.isPending} onClick={() => importMutation.mutate()}>
            {importMutation.isPending ? 'Importing… this can take a minute' : 'Import MCQ Content'}
          </button>
          {importLog && <p className="text-sm text-brand-700 dark:text-brand-300">{importLog}</p>}
          {importMutation.isError && <ErrorState message={(importMutation.error as any)?.message || 'Import failed'} />}
        </div>
      )}

      <section>
        <h1 className="text-2xl font-extrabold mb-1">नमस्ते 👋 Welcome back</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-4">Here's your MPPSC preparation snapshot.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard
            icon="📚"
            label="Total MCQs"
            value={stats.totalQuestions.toLocaleString()}
            sub={`${stats.totalUnits} units · ${stats.totalTopics} topics`}
          />
          <StatCard
            icon="✅"
            label="Attempted"
            value={`${stats.attemptedQuestions.toLocaleString()}`}
            sub={`${stats.accuracy}% accuracy`}
          />
          <StatCard icon="🔥" label="Current Streak" value={`${stats.currentStreak} day${stats.currentStreak === 1 ? '' : 's'}`} />
          <StatCard
            icon="🎯"
            label="Today's Goal"
            value={`${stats.todayAttempted} / ${stats.dailyGoal}`}
            sub={stats.goalMet ? 'Goal met! 🎉' : `${goalPct}% done`}
          />
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Link to="/mock" className="card p-4 hover:border-brand-400 transition">
          <div className="text-2xl mb-1">⏱️</div>
          <div className="font-semibold">Mock Test</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">Timed exam simulation</div>
        </Link>
        <Link to="/review/wrong" className="card p-4 hover:border-brand-400 transition">
          <div className="text-2xl mb-1">❌</div>
          <div className="font-semibold">Wrong Answers</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{stats.wrongDeckCount} to review</div>
        </Link>
        <Link to="/review/due" className="card p-4 hover:border-brand-400 transition">
          <div className="text-2xl mb-1">🔁</div>
          <div className="font-semibold">Revision Due</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{stats.dueCount} due today</div>
        </Link>
        <Link to="/bookmarks" className="card p-4 hover:border-brand-400 transition">
          <div className="text-2xl mb-1">🔖</div>
          <div className="font-semibold">Bookmarks</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{stats.bookmarksCount} saved</div>
        </Link>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">Units</h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {stats.totalQuestions.toLocaleString()} MCQs across {units.length} units
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {units.map((u) => (
            <div key={u.id} className="card p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">Unit {u.code}</div>
                  <Link to={`/units/${u.id}`} className="font-bold hover:underline">
                    {u.name}
                  </Link>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg font-extrabold">{u.questionCount}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">MCQs</div>
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400">{u.topicCount} topics</div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>
                    Attempted {u.attempted}/{u.questionCount}
                  </span>
                  <span>{u.accuracy}% accuracy</span>
                </div>
                <ProgressBar value={u.attempted} max={u.questionCount} />
              </div>

              <div className="flex gap-2 mt-1">
                <Link to={`/units/${u.id}`} className="btn-secondary flex-1">
                  Open Unit
                </Link>
                <button
                  className="btn-primary flex-1"
                  disabled={u.questionCount === 0 || startSession.isPending}
                  onClick={() => startSession.mutate({ mode: 'PRACTICE', unitId: u.id, count: 15, shuffle: true })}
                >
                  Quick Practice
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
