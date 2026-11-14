import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { api, NoteCategorySummary } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

export default function NotesPage() {
  const categoriesQ = useQuery({
    queryKey: ['notes', 'categories'],
    queryFn: async () => (await api.get<NoteCategorySummary[]>('/notes')).data,
  });

  if (categoriesQ.isLoading) return <Loading label="Loading notes…" />;
  if (categoriesQ.isError) return <ErrorState message="Could not load MPESB notes." />;

  const categories = categoriesQ.data!;
  const totalFiles = categories.reduce((s, c) => s + c.fileCount, 0);
  const totalRead = categories.reduce((s, c) => s + c.readCount, 0);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-extrabold mb-1">MPESB Notes 📝</h1>
        <p className="text-slate-500 dark:text-slate-400">
          Deep-dive study notes for MPESB/MP-govt exam gaps — {totalFiles} notes, {totalRead} read so far.
        </p>
      </section>

      {categories.length === 0 && (
        <div className="card p-8 text-center space-y-2">
          <div className="text-3xl">📥</div>
          <h2 className="text-lg font-bold">No notes imported yet</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Go to Home and click "Import Content" to load the notes from <code>mpesb-syllabus/notes/</code>.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {categories.map((c) => (
          <Link key={c.id} to={`/notes/categories/${c.id}`} className="card p-5 flex flex-col gap-3 hover:border-brand-400 transition">
            <div>
              <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{c.code}</div>
              <div className="font-bold">{c.name}</div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>
                  Read {c.readCount}/{c.fileCount}
                </span>
                <span>{c.fileCount > 0 ? Math.round((c.readCount / c.fileCount) * 100) : 0}%</span>
              </div>
              <ProgressBar value={c.readCount} max={c.fileCount} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
