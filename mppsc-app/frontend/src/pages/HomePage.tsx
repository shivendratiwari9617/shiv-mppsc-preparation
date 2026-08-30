import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api, OverviewStats, UnitSummary } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';
import StatCard from '../components/StatCard';
import { useStartSession } from '../hooks/useStartSession';

const pyqYearSummary = [
  { year: 2020, total: 100, full: 81, partial: 18, missing: 1, currentAffairs: 11 },
  { year: 2021, total: 100, full: 82, partial: 15, missing: 3, currentAffairs: 8 },
  { year: 2022, total: 100, full: 79, partial: 20, missing: 1, currentAffairs: 9 },
  { year: 2023, total: 100, full: 76, partial: 21, missing: 3, currentAffairs: 12 },
  { year: 2024, total: 100, full: 72, partial: 25, missing: 3, currentAffairs: 12 },
  { year: 2025, total: 100, full: 65, partial: 28, missing: 7, currentAffairs: 9 },
  { year: 2026, total: 100, full: 69, partial: 25, missing: 6, currentAffairs: 8 },
];

const pyqUnitSummary = [
  { unit: 'Unit 1', name: 'MP इतिहास, संस्कृति व साहित्य', total: 58, full: 35, partial: 23, missing: 0 },
  { unit: 'Unit 2', name: 'भारत का इतिहास', total: 80, full: 75, partial: 5, missing: 0 },
  { unit: 'Unit 3', name: 'भारत व MP का भूगोल', total: 117, full: 111, partial: 6, missing: 0 },
  { unit: 'Unit 4', name: 'संवैधानिक तंत्र', total: 114, full: 114, partial: 0, missing: 0 },
  { unit: 'Unit 5', name: 'अर्थव्यवस्था', total: 62, full: 35, partial: 17, missing: 10 },
  { unit: 'Unit 6', name: 'विज्ञान, टेक्नोलॉजी व स्वास्थ्य', total: 66, full: 33, partial: 15, missing: 18 },
  { unit: 'Unit 7', name: 'पर्यावरण, जैवविविधता, SDGs, आपदा', total: 32, full: 32, partial: 0, missing: 0 },
  { unit: 'Unit 8', name: 'समसामयिकी', total: 70, full: 1, partial: 69, missing: 0 },
  { unit: 'Unit 9', name: 'ICT', total: 57, full: 47, partial: 10, missing: 0 },
  { unit: 'Unit 10', name: 'जनजातीय विरासत, लोक-संस्कृति', total: 44, full: 41, partial: 3, missing: 0 },
];

const pyqTotals = pyqYearSummary.reduce(
  (totals, year) => ({
    total: totals.total + year.total,
    full: totals.full + year.full,
    partial: totals.partial + year.partial,
    missing: totals.missing + year.missing,
    currentAffairs: totals.currentAffairs + year.currentAffairs,
  }),
  { total: 0, full: 0, partial: 0, missing: 0, currentAffairs: 0 }
);

const coveragePercent = (value: number, total: number) => (total > 0 ? Math.round((value / total) * 100) : 0);

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
  const pyqNotFull = pyqTotals.partial + pyqTotals.missing;
  const pyqCurrentAffairsShare = coveragePercent(pyqTotals.currentAffairs, pyqNotFull);

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

      <section className="card p-5 space-y-5">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-bold">PYQ Coverage</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              2020–2026 Paper I compared with your study notes
            </p>
          </div>
          <div className="text-sm font-semibold text-brand-700 dark:text-brand-300">
            {coveragePercent(pyqTotals.full, pyqTotals.total)}% fully covered
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Checked</div>
            <div className="text-2xl font-extrabold">{pyqTotals.total}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">7 papers</div>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30 p-3">
            <div className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">In Notes</div>
            <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">{pyqTotals.full}</div>
            <div className="text-xs text-emerald-700/80 dark:text-emerald-300/80">Available / Full</div>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30 p-3">
            <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-300">Partial</div>
            <div className="text-2xl font-extrabold text-amber-700 dark:text-amber-300">{pyqTotals.partial}</div>
            <div className="text-xs text-amber-700/80 dark:text-amber-300/80">Thin exact facts</div>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30 p-3">
            <div className="text-xs uppercase tracking-wide text-red-700 dark:text-red-300">Missing</div>
            <div className="text-2xl font-extrabold text-red-700 dark:text-red-300">{pyqTotals.missing}</div>
            <div className="text-xs text-red-700/80 dark:text-red-300/80">Need new notes</div>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30 p-3">
            <div className="text-xs uppercase tracking-wide text-blue-700 dark:text-blue-300">Current Affairs</div>
            <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-300">{pyqTotals.currentAffairs}</div>
            <div className="text-xs text-blue-700/80 dark:text-blue-300/80">{pyqCurrentAffairsShare}% of not full</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="py-2 pr-3 text-left">Year</th>
                <th className="px-3 py-2 text-right">Total</th>
                <th className="px-3 py-2 text-right">In Notes</th>
                <th className="px-3 py-2 text-right">Partial</th>
                <th className="px-3 py-2 text-right">Missing</th>
                <th className="px-3 py-2 text-right">Not Full</th>
                <th className="px-3 py-2 text-right">Current Affairs</th>
                <th className="pl-3 py-2 text-right">Other Gap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {pyqYearSummary.map((year) => {
                const notFull = year.partial + year.missing;
                const otherGap = notFull - year.currentAffairs;

                return (
                  <tr key={year.year}>
                    <td className="py-2 pr-3 font-semibold">{year.year}</td>
                    <td className="px-3 py-2 text-right">{year.total}</td>
                    <td className="px-3 py-2 text-right text-emerald-700 dark:text-emerald-300">{year.full}</td>
                    <td className="px-3 py-2 text-right text-amber-700 dark:text-amber-300">{year.partial}</td>
                    <td className="px-3 py-2 text-right text-red-700 dark:text-red-300">{year.missing}</td>
                    <td className="px-3 py-2 text-right font-semibold">{notFull}</td>
                    <td className="px-3 py-2 text-right text-blue-700 dark:text-blue-300">{year.currentAffairs}</td>
                    <td className="pl-3 py-2 text-right">{otherGap}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50/70 p-3 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
          Current affairs accounts for {pyqTotals.currentAffairs} of {pyqNotFull} not-fully-covered PYQ
          questions. Adding yearly current-affairs MCQs will reduce the partial/missing count fastest.
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="font-bold">Unit-wise PYQ Coverage</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">All years combined</span>
          </div>
          <div className="grid gap-2">
            {pyqUnitSummary.map((unit) => {
              const fullPct = coveragePercent(unit.full, unit.total);
              const partialPct = coveragePercent(unit.partial, unit.total);
              const missingPct = Math.max(0, 100 - fullPct - partialPct);

              return (
                <div key={unit.unit} className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{unit.unit}</div>
                      <div className="font-semibold leading-snug">{unit.name}</div>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
                      {unit.full}/{unit.partial}/{unit.missing} of {unit.total}
                    </div>
                  </div>
                  <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="bg-emerald-500" style={{ width: `${fullPct}%` }} />
                    <div className="bg-amber-400" style={{ width: `${partialPct}%` }} />
                    <div className="bg-red-500" style={{ width: `${missingPct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
