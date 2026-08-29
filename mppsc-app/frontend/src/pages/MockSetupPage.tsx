import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api, UnitSummary } from '../api/client';
import { Loading, ErrorState } from '../components/Feedback';
import { useStartSession } from '../hooks/useStartSession';

const PRIORITIES = ['VERY_HIGH', 'HIGH', 'MEDIUM', 'LOW'];

export default function MockSetupPage() {
  const [params] = useSearchParams();
  const presetUnitId = params.get('unitId');

  const unitsQ = useQuery({
    queryKey: ['units'],
    queryFn: async () => (await api.get<UnitSummary[]>('/units')).data,
  });

  const [unitId, setUnitId] = useState<string>(presetUnitId || '');
  const [count, setCount] = useState(25);
  const [minutes, setMinutes] = useState(30);
  const [priorityTags, setPriorityTags] = useState<string[]>([]);

  const startSession = useStartSession();

  useEffect(() => {
    setMinutes(Math.max(5, Math.round(count * 1.2)));
  }, [count]);

  if (unitsQ.isLoading) return <Loading label="Loading units…" />;
  if (unitsQ.isError || !unitsQ.data) return <ErrorState message="Could not load units." />;

  const selectedUnit = unitsQ.data.find((u) => String(u.id) === unitId);
  const maxAvailable = selectedUnit ? selectedUnit.questionCount : unitsQ.data.reduce((s, u) => s + u.questionCount, 0);

  function toggleTag(tag: string) {
    setPriorityTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  function start() {
    startSession.mutate({
      mode: 'MOCK',
      unitId: unitId ? Number(unitId) : undefined,
      count,
      timeLimitSec: minutes * 60,
      priorityTags: priorityTags.length ? priorityTags : undefined,
      shuffle: true,
    });
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold">⏱️ Mock Test Setup</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Configure a timed test and see how you perform.</p>
      </div>

      <div className="card p-5 space-y-5">
        <div>
          <label className="text-sm font-medium">Unit</label>
          <select
            value={unitId}
            onChange={(e) => setUnitId(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          >
            <option value="">All Units (mixed)</option>
            {unitsQ.data.map((u) => (
              <option key={u.id} value={u.id}>
                Unit {u.code} — {u.name} ({u.questionCount} MCQs)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">
            Number of Questions <span className="text-slate-400">(max {maxAvailable})</span>
          </label>
          <input
            type="number"
            min={5}
            max={Math.max(5, maxAvailable)}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(maxAvailable || 1, Number(e.target.value))))}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Time Limit (minutes)</label>
          <input
            type="number"
            min={1}
            value={minutes}
            onChange={(e) => setMinutes(Math.max(1, Number(e.target.value)))}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Priority Filter (optional)</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {PRIORITIES.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  priorityTags.includes(tag)
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {tag.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        <button className="btn-primary w-full" disabled={startSession.isPending || maxAvailable === 0} onClick={start}>
          {startSession.isPending ? 'Starting…' : 'Start Mock Test'}
        </button>
        {startSession.isError && <ErrorState message={(startSession.error as any)?.response?.data?.error || 'Could not start test.'} />}
      </div>
    </div>
  );
}
