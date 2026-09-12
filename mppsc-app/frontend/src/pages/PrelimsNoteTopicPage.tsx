import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { api, PrelimsNoteTopicDetail } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

export default function PrelimsNoteTopicPage() {
  const { id } = useParams();
  const topicId = Number(id);

  const topicQ = useQuery({
    queryKey: ['prelims-notes', 'topic', topicId],
    queryFn: async () => (await api.get<PrelimsNoteTopicDetail>(`/prelims-notes/topics/${topicId}`)).data,
    enabled: Number.isFinite(topicId),
  });

  if (topicQ.isLoading) return <Loading label="Loading topic…" />;
  if (topicQ.isError || !topicQ.data) return <ErrorState message="Could not load this topic." />;

  const { topic, files } = topicQ.data;
  const readCount = files.filter((f) => f.isRead).length;

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/prelims-notes/units/${topic.unit.id}`} className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← {topic.unit.name}
        </Link>
        <div className="mt-1">
          {topic.groupLabel && <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{topic.groupLabel}</div>}
          <h1 className="text-2xl font-extrabold">{topic.title}</h1>
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
          <Link key={f.id} to={`/prelims-notes/files/${f.id}`} className="card p-4 flex items-center justify-between gap-3 hover:border-brand-400 transition">
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
