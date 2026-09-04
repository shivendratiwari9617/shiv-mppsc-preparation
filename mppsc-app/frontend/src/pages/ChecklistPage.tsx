import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { api, ChecklistUnitSummary } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

export default function ChecklistPage() {
  const unitsQ = useQuery({
    queryKey: ['checklist', 'units'],
    queryFn: async () => (await api.get<ChecklistUnitSummary[]>('/checklist/units')).data,
  });

  if (unitsQ.isLoading) return <Loading label="Loading syllabus checklist…" />;
  if (unitsQ.isError) return <ErrorState message="Could not load the syllabus checklist." />;

  const units = unitsQ.data!;
  const totalItems = units.reduce((s, u) => s + u.itemCount, 0);
  const totalChecked = units.reduce((s, u) => s + u.checkedCount, 0);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-extrabold mb-1">Syllabus Checklist ✅</h1>
        <p className="text-slate-500 dark:text-slate-400">
          Full official MPPSC Prelims syllabus, topic by topic — {totalChecked}/{totalItems} studied.
        </p>
      </section>

      {units.length === 0 && (
        <div className="card p-8 text-center space-y-2">
          <div className="text-3xl">📥</div>
          <h2 className="text-lg font-bold">No checklist imported yet</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Go to Home and click "Import Content" to load the checklist from <code>mppsc-syllabus/prelims/</code>.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {units.map((u) => (
          <Link key={u.id} to={`/checklist/units/${u.id}`} className="card p-5 flex flex-col gap-3 hover:border-brand-400 transition">
            <div>
              <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{u.code}</div>
              <div className="font-bold">{u.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{u.fileCount} files</div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>
                  Studied {u.checkedCount}/{u.itemCount}
                </span>
                <span>{u.itemCount > 0 ? Math.round((u.checkedCount / u.itemCount) * 100) : 0}%</span>
              </div>
              <ProgressBar value={u.checkedCount} max={u.itemCount} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
