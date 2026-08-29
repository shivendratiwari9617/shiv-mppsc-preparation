import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { api, UnitDetail } from '../api/client';
import { Loading, ErrorState } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';
import { useStartSession } from '../hooks/useStartSession';

export default function UnitPage() {
  const { id } = useParams();
  const unitId = Number(id);
  const [filter, setFilter] = useState('');

  const unitQ = useQuery({
    queryKey: ['unit', unitId],
    queryFn: async () => (await api.get<UnitDetail>(`/units/${unitId}`)).data,
    enabled: Number.isFinite(unitId),
  });

  const startSession = useStartSession();

  const filteredTopics = useMemo(() => {
    if (!unitQ.data) return [];
    const f = filter.trim().toLowerCase();
    if (!f) return unitQ.data.topics;
    return unitQ.data.topics.filter((t) => t.title.toLowerCase().includes(f));
  }, [unitQ.data, filter]);

  if (unitQ.isLoading) return <Loading label="Loading unit…" />;
  if (unitQ.isError || !unitQ.data) return <ErrorState message="Could not load this unit." />;

  const { unit, stats, topics } = unitQ.data;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← All units
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap mt-1">
          <div>
            <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">Unit {unit.code}</div>
            <h1 className="text-2xl font-extrabold">{unit.name}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {topics.length} topics · {stats.questionCount} MCQs
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="btn-secondary"
              disabled={stats.questionCount === 0 || startSession.isPending}
              onClick={() => startSession.mutate({ mode: 'PRACTICE', unitId: unit.id, shuffle: true })}
            >
              Practice Entire Unit
            </button>
            <Link to={`/mock?unitId=${unit.id}`} className="btn-primary">
              Mock Test (this unit)
            </Link>
          </div>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex justify-between text-sm mb-1">
          <span>
            Attempted {stats.attempted}/{stats.questionCount}
          </span>
          <span>{stats.accuracy}% accuracy</span>
        </div>
        <ProgressBar value={stats.attempted} max={stats.questionCount} />
      </div>

      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter topics in this unit…"
        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
      />

      <div className="space-y-2">
        {filteredTopics.map((t) => (
          <div key={t.id} className="card p-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="font-medium truncate">{t.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {t.questionCount} MCQs · attempted {t.attempted} · {t.accuracy}% accuracy
              </div>
            </div>
            <button
              className="btn-primary shrink-0"
              disabled={startSession.isPending}
              onClick={() => startSession.mutate({ mode: 'PRACTICE', topicId: t.id })}
            >
              Practice
            </button>
          </div>
        ))}
        {filteredTopics.length === 0 && <ErrorState message="No topics match this filter." />}
      </div>
    </div>
  );
}
