import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { api, PrelimsNoteUnitSummary } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

export default function PrelimsNotesPage() {
  const unitsQ = useQuery({
    queryKey: ['prelims-notes', 'units'],
    queryFn: async () => (await api.get<PrelimsNoteUnitSummary[]>('/prelims-notes')).data,
  });

  if (unitsQ.isLoading) return <Loading label="Loading Prelims notes…" />;
  if (unitsQ.isError) return <ErrorState message="Could not load the Prelims notes." />;

  const units = unitsQ.data!;
  const totalNotes = units.reduce((s, u) => s + u.noteCount, 0);
  const totalRead = units.reduce((s, u) => s + u.readCount, 0);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-extrabold mb-1">Prelims Notes 📖</h1>
        <p className="text-slate-500 dark:text-slate-400">
          Fact-based, NCERT-primary-sourced deep notes, one per syllabus checklist item — {totalNotes} notes, {totalRead} read so far.
        </p>
      </section>

      {units.length === 0 && (
        <div className="card p-8 text-center space-y-2">
          <div className="text-3xl">📥</div>
          <h2 className="text-lg font-bold">No Prelims notes imported yet</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Go to Home and click "Import Content" to load the notes from <code>mppsc-syllabus/prelims-notes/</code>.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {units.map((u) => (
          <Link key={u.id} to={`/prelims-notes/units/${u.id}`} className="card p-5 flex flex-col gap-3 hover:border-brand-400 transition">
            <div>
              <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{u.code}</div>
              <div className="font-bold">{u.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{u.topicCount} topics</div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>
                  Read {u.readCount}/{u.noteCount}
                </span>
                <span>{u.noteCount > 0 ? Math.round((u.readCount / u.noteCount) * 100) : 0}%</span>
              </div>
              <ProgressBar value={u.readCount} max={u.noteCount} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
