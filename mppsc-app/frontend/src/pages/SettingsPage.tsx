import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { api } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';

interface Settings {
  dailyGoal: string;
}
interface ImportLog {
  id: number;
  startedAt: string;
  finishedAt: string | null;
  status: string;
  unitsFound: number;
  topicsFound: number;
  questionsFound: number;
  notesFound: number;
  checklistItemsFound: number;
  prelimsNotesFound: number;
  message: string | null;
}

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const settingsQ = useQuery({
    queryKey: ['settings'],
    queryFn: async () => (await api.get<Settings>('/settings')).data,
  });
  const lastImportQ = useQuery({
    queryKey: ['import-last'],
    queryFn: async () => (await api.get<ImportLog | null>('/admin/import/last')).data,
  });

  const [goal, setGoal] = useState<string>('');
  const [resetConfirm, setResetConfirm] = useState('');

  const saveGoal = useMutation({
    mutationFn: async (value: number) => (await api.put('/settings', { dailyGoal: value })).data,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['settings'] }),
  });

  const importMutation = useMutation({
    mutationFn: async () => (await api.post('/admin/import')).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['import-last'] });
      queryClient.invalidateQueries({ queryKey: ['units'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      queryClient.invalidateQueries({ queryKey: ['checklist'] });
      queryClient.invalidateQueries({ queryKey: ['prelims-notes'] });
    },
  });

  const resetMutation = useMutation({
    mutationFn: async () => (await api.delete('/admin/reset-progress')).data,
    onSuccess: () => {
      setResetConfirm('');
      queryClient.invalidateQueries();
    },
  });

  if (settingsQ.isLoading) return <Loading label="Loading settings…" />;
  if (settingsQ.isError || !settingsQ.data) return <ErrorState message="Could not load settings." />;

  const currentGoal = goal || settingsQ.data.dailyGoal;
  const lastImport = lastImportQ.data;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-extrabold">⚙️ Settings</h1>

      <div className="card p-5 space-y-3">
        <h2 className="font-bold">Daily Goal</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Number of questions per day to keep your streak alive.</p>
        <div className="flex gap-2">
          <input
            type="number"
            min={1}
            value={currentGoal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
          />
          <button className="btn-primary shrink-0" onClick={() => saveGoal.mutate(Number(currentGoal))} disabled={saveGoal.isPending}>
            Save
          </button>
        </div>
        {saveGoal.isSuccess && <p className="text-xs text-green-600">Saved!</p>}
      </div>

      <div className="card p-5 space-y-3">
        <h2 className="font-bold">Content Import</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Scans the mounted content folder and (re)imports all units/topics/questions, MPSI study notes, the full
          MPPSC syllabus checklist, and the fact-based Prelims notes. Safe to re-run — existing progress is preserved.
        </p>
        {lastImport && (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Last run: {new Date(lastImport.startedAt).toLocaleString()} — {lastImport.status} — {lastImport.unitsFound} units,{' '}
            {lastImport.topicsFound} topics, {lastImport.questionsFound} questions, {lastImport.notesFound} notes,{' '}
            {lastImport.checklistItemsFound} checklist items, {lastImport.prelimsNotesFound} Prelims notes
            {lastImport.message ? ` — ${lastImport.message}` : ''}
          </p>
        )}
        <button className="btn-primary" disabled={importMutation.isPending} onClick={() => importMutation.mutate()}>
          {importMutation.isPending ? 'Importing…' : 'Re-import Content'}
        </button>
        {importMutation.isSuccess && <p className="text-xs text-green-600">Import finished.</p>}
        {importMutation.isError && <ErrorState message={(importMutation.error as any)?.message || 'Import failed'} />}
      </div>

      <div className="card p-5 space-y-3 border-red-200 dark:border-red-900">
        <h2 className="font-bold text-red-600">Danger Zone</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Resets all tracked activity — attempts, sessions, bookmarks, revision schedule and streaks. Your imported content
          (units/topics/questions) is not affected. This cannot be undone.
        </p>
        <input
          value={resetConfirm}
          onChange={(e) => setResetConfirm(e.target.value)}
          placeholder='Type "RESET" to confirm'
          className="w-full rounded-xl border border-red-200 dark:border-red-900 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
        />
        <button
          className="btn-danger"
          disabled={resetConfirm !== 'RESET' || resetMutation.isPending}
          onClick={() => resetMutation.mutate()}
        >
          Reset All Progress
        </button>
        {resetMutation.isSuccess && <p className="text-xs text-green-600">Progress reset.</p>}
      </div>
    </div>
  );
}
