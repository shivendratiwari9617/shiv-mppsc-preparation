import { useQuery, useMutation } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { api, SessionInfo } from '../api/client';
import { Loading, ErrorState } from '../components/Feedback';
import { useStartSession } from '../hooks/useStartSession';

interface AttemptRow {
  id: number;
  questionId: number;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string | null;
  topicTitle: string;
  selectedIndex: number | null;
  isCorrect: boolean;
}

export default function ResultsPage() {
  const { sessionId } = useParams();
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const startSession = useStartSession();

  const q = useQuery({
    queryKey: ['session', sessionId],
    queryFn: async () => (await api.get<{ session: SessionInfo; attempts: AttemptRow[] }>(`/sessions/${sessionId}`)).data,
    enabled: !!sessionId,
  });

  if (q.isLoading) return <Loading label="Loading results…" />;
  if (q.isError || !q.data) return <ErrorState message="Could not load results." />;

  const { session, attempts } = q.data;
  const total = session.totalQuestions || attempts.length;
  const accuracy = total > 0 ? Math.round((session.correctCount / total) * 100) : 0;
  const wrongIds = attempts.filter((a) => !a.isCorrect && a.selectedIndex !== null).map((a) => a.questionId);

  function toggle(id: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="card p-6 text-center space-y-2">
        <div className="text-4xl">{accuracy >= 70 ? '🎉' : accuracy >= 40 ? '💪' : '📖'}</div>
        <h1 className="text-2xl font-extrabold">
          {session.correctCount} / {total} correct
        </h1>
        <p className="text-slate-500 dark:text-slate-400">{accuracy}% accuracy</p>
        <div className="flex justify-center gap-4 text-sm pt-1">
          <span className="text-green-600">✅ {session.correctCount} correct</span>
          <span className="text-red-600">❌ {session.wrongCount} wrong</span>
          <span className="text-slate-500">⏭ {session.skippedCount} skipped</span>
        </div>
        <div className="flex justify-center gap-2 pt-3">
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
          {wrongIds.length > 0 && (
            <button
              className="btn-primary"
              disabled={startSession.isPending}
              onClick={() => startSession.mutate({ mode: 'CUSTOM', questionIds: wrongIds })}
            >
              Redo Wrong Answers ({wrongIds.length})
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-bold text-lg">Answer Review</h2>
        {attempts.map((a, idx) => (
          <div key={a.id} className={`card p-4 border-l-4 ${a.isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
              Q{idx + 1} · {a.topicTitle}
            </div>
            <div className="font-medium mb-2">{a.questionText}</div>
            <div className="space-y-1.5">
              {a.options.map((opt, i) => {
                let cls = 'text-sm px-3 py-1.5 rounded-lg border';
                if (i === a.correctIndex) cls += ' bg-green-50 dark:bg-green-900/30 border-green-400 font-semibold';
                else if (i === a.selectedIndex) cls += ' bg-red-50 dark:bg-red-900/30 border-red-400';
                else cls += ' border-slate-200 dark:border-slate-800';
                return (
                  <div key={i} className={cls}>
                    {opt}
                  </div>
                );
              })}
            </div>
            {a.explanation && (
              <button className="text-xs text-brand-600 dark:text-brand-400 mt-2 hover:underline" onClick={() => toggle(a.id)}>
                {expanded.has(a.id) ? 'Hide' : 'Show'} explanation
              </button>
            )}
            {expanded.has(a.id) && (
              <div className="mt-2 text-sm bg-slate-50 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-3 whitespace-pre-wrap">
                {a.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
