import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api, ReviewQuestion } from '../api/client';
import PreviewQuestionCard from '../components/PreviewQuestionCard';
import { Loading } from '../components/Feedback';
import { useStartSession } from '../hooks/useStartSession';

export default function SearchPage() {
  const [term, setTerm] = useState('');
  const [debounced, setDebounced] = useState('');
  const startSession = useStartSession();

  function onChange(v: string) {
    setTerm(v);
    window.clearTimeout((onChange as any)._t);
    (onChange as any)._t = window.setTimeout(() => setDebounced(v), 350);
  }

  const q = useQuery({
    queryKey: ['search', debounced],
    queryFn: async () => (await api.get<ReviewQuestion[]>(`/search?q=${encodeURIComponent(debounced)}`)).data,
    enabled: debounced.trim().length >= 2,
  });

  const results = q.data || [];

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold">🔍 Search Questions</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Find MCQs by keyword across all units.</p>
      </div>

      <input
        autoFocus
        value={term}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type at least 2 characters…"
        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500"
      />

      {q.isLoading && <Loading label="Searching…" />}

      {!q.isLoading && debounced.trim().length >= 2 && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">{results.length} result(s)</span>
          {results.length > 0 && (
            <button
              className="btn-primary"
              disabled={startSession.isPending}
              onClick={() => startSession.mutate({ mode: 'CUSTOM', questionIds: results.map((r) => r.id) })}
            >
              Practice These Results
            </button>
          )}
        </div>
      )}

      <div className="space-y-2">
        {results.map((r) => (
          <PreviewQuestionCard key={r.id} q={r} />
        ))}
      </div>
    </div>
  );
}
