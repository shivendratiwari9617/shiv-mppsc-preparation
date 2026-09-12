import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { Link, useNavigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { api, PrelimsNoteFileDetail } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';

export default function PrelimsNoteFilePage() {
  const { id } = useParams();
  const fileId = Number(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const fileQ = useQuery({
    queryKey: ['prelims-notes', 'file', fileId],
    queryFn: async () => (await api.get<PrelimsNoteFileDetail>(`/prelims-notes/files/${fileId}`)).data,
    enabled: Number.isFinite(fileId),
  });

  const toggleRead = useMutation({
    mutationFn: async (isRead: boolean) => (await api.patch(`/prelims-notes/files/${fileId}/read`, { isRead })).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prelims-notes'] });
    },
  });

  if (fileQ.isLoading) return <Loading label="Loading note…" />;
  if (fileQ.isError || !fileQ.data) return <ErrorState message="Could not load this note." />;

  const note = fileQ.data;

  return (
    <div className="space-y-4">
      <div>
        <Link to={`/prelims-notes/topics/${note.topic.id}`} className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← {note.topic.title}
        </Link>
      </div>

      <div className="card p-4 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex gap-2">
          <button className="btn-secondary" disabled={!note.prev} onClick={() => note.prev && navigate(`/prelims-notes/files/${note.prev.id}`)}>
            ← Prev
          </button>
          <button className="btn-secondary" disabled={!note.next} onClick={() => note.next && navigate(`/prelims-notes/files/${note.next.id}`)}>
            Next →
          </button>
        </div>
        <button
          className={note.isRead ? 'btn-secondary' : 'btn-primary'}
          disabled={toggleRead.isPending}
          onClick={() => toggleRead.mutate(!note.isRead)}
        >
          {note.isRead ? '✓ Marked as read' : 'Mark as read'}
        </button>
      </div>

      <div className="card p-6">
        <div className="md-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
