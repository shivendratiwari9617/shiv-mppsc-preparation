import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, PrelimsNoteTopicSummary, PrelimsNoteUnitDetail } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

function TopicRow({ topic }: { topic: PrelimsNoteTopicSummary }) {
  const pct = topic.noteCount > 0 ? Math.round((topic.readCount / topic.noteCount) * 100) : 0;
  return (
    <Link to={`/prelims-notes/topics/${topic.id}`} className="card p-4 flex items-center justify-between gap-3 hover:border-brand-400 transition">
      <div className="min-w-0">
        <div className="font-medium truncate">{topic.title}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {topic.readCount}/{topic.noteCount} read
        </div>
      </div>
      <div className="w-24 shrink-0">
        <ProgressBar value={topic.readCount} max={topic.noteCount} />
        <div className="text-right text-[11px] text-slate-500 dark:text-slate-400 mt-1">{pct}%</div>
      </div>
    </Link>
  );
}

export default function PrelimsNoteUnitPage() {
  const { id } = useParams();
  const unitId = Number(id);

  const unitQ = useQuery({
    queryKey: ['prelims-notes', 'unit', unitId],
    queryFn: async () => (await api.get<PrelimsNoteUnitDetail>(`/prelims-notes/units/${unitId}`)).data,
    enabled: Number.isFinite(unitId),
  });

  const groups = useMemo(() => {
    if (!unitQ.data) return [];
    const map = new Map<string | null, PrelimsNoteTopicSummary[]>();
    for (const t of unitQ.data.topics) {
      const key = t.groupLabel;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(t);
    }
    return Array.from(map.entries());
  }, [unitQ.data]);

  if (unitQ.isLoading) return <Loading label="Loading unit…" />;
  if (unitQ.isError || !unitQ.data) return <ErrorState message="Could not load this Prelims-notes unit." />;

  const { unit, topics } = unitQ.data;
  const noteCount = topics.reduce((s, t) => s + t.noteCount, 0);
  const readCount = topics.reduce((s, t) => s + t.readCount, 0);

  return (
    <div className="space-y-6">
      <div>
        <Link to="/prelims-notes" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← All Prelims-notes units
        </Link>
        <div className="mt-1">
          <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{unit.code}</div>
          <h1 className="text-2xl font-extrabold">{unit.name}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{topics.length} topics</p>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex justify-between text-sm mb-1">
          <span>
            Read {readCount}/{noteCount}
          </span>
          <span>{noteCount > 0 ? Math.round((readCount / noteCount) * 100) : 0}%</span>
        </div>
        <ProgressBar value={readCount} max={noteCount} />
      </div>

      <div className="space-y-5">
        {groups.map(([groupLabel, groupTopics]) => (
          <div key={groupLabel ?? '__root'} className="space-y-2">
            {groupLabel && <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{groupLabel}</h3>}
            {groupTopics.map((t) => (
              <TopicRow key={t.id} topic={t} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
