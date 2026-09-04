import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { api, NoteCategoryDetail } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

export default function NoteCategoryPage() {
  const { id } = useParams();
  const categoryId = Number(id);

  const categoryQ = useQuery({
    queryKey: ['notes', 'category', categoryId],
    queryFn: async () => (await api.get<NoteCategoryDetail>(`/notes/categories/${categoryId}`)).data,
    enabled: Number.isFinite(categoryId),
  });

  if (categoryQ.isLoading) return <Loading label="Loading category…" />;
  if (categoryQ.isError || !categoryQ.data) return <ErrorState message="Could not load this category." />;

  const { category, files } = categoryQ.data;
  const readCount = files.filter((f) => f.isRead).length;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/notes" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← All note categories
        </Link>
        <div className="mt-1">
          <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{category.code}</div>
          <h1 className="text-2xl font-extrabold">{category.name}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{files.length} notes</p>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex justify-between text-sm mb-1">
          <span>
            Read {readCount}/{files.length}
          </span>
          <span>{files.length > 0 ? Math.round((readCount / files.length) * 100) : 0}%</span>
        </div>
        <ProgressBar value={readCount} max={files.length} />
      </div>

      <div className="space-y-2">
        {files.map((f) => (
          <Link key={f.id} to={`/notes/files/${f.id}`} className="card p-4 flex items-center justify-between gap-3 hover:border-brand-400 transition">
            <div className="min-w-0 font-medium truncate">{f.title}</div>
            <span className={f.isRead ? 'badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 shrink-0' : 'badge-low shrink-0'}>
              {f.isRead ? '✓ Read' : 'Unread'}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
