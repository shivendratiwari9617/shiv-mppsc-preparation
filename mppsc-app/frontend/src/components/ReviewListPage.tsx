import { useQuery } from '@tanstack/react-query';
import { api, CreateSessionPayload, ReviewQuestion } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import PreviewQuestionCard from '../components/PreviewQuestionCard';
import { useStartSession } from '../hooks/useStartSession';

export default function ReviewListPage({
  title,
  icon,
  description,
  fetchUrl,
  queryKey,
  sessionPayload,
  emptyMessage,
}: {
  title: string;
  icon: string;
  description: string;
  fetchUrl: string;
  queryKey: string;
  sessionPayload: CreateSessionPayload;
  emptyMessage: string;
}) {
  const q = useQuery({
    queryKey: [queryKey],
    queryFn: async () => (await api.get<ReviewQuestion[]>(fetchUrl)).data,
  });
  const startSession = useStartSession();

  if (q.isLoading) return <Loading label={`Loading ${title.toLowerCase()}…`} />;
  if (q.isError || !q.data) return <ErrorState message={`Could not load ${title.toLowerCase()}.`} />;

  const items = q.data;

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold">
            {icon} {title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{description}</p>
        </div>
        {items.length > 0 && (
          <button
            className="btn-primary"
            disabled={startSession.isPending}
            onClick={() => startSession.mutate({ ...sessionPayload, questionIds: items.map((i) => i.id) })}
          >
            Practice All ({items.length})
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="card p-10 text-center text-slate-500 dark:text-slate-400">{emptyMessage}</div>
      ) : (
        <div className="space-y-2">
          {items.map((it) => (
            <PreviewQuestionCard key={it.id} q={it} />
          ))}
        </div>
      )}
    </div>
  );
}
