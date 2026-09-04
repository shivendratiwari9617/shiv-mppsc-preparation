import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, ChecklistFileDetail } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

export default function ChecklistFilePage() {
  const { id } = useParams();
  const fileId = Number(id);
  const queryClient = useQueryClient();
  const queryKey = ['checklist', 'file', fileId];

  const fileQ = useQuery({
    queryKey,
    queryFn: async () => (await api.get<ChecklistFileDetail>(`/checklist/files/${fileId}`)).data,
    enabled: Number.isFinite(fileId),
  });

  const toggleItem = useMutation({
    mutationFn: async ({ itemId, isChecked }: { itemId: number; isChecked: boolean }) =>
      (await api.patch(`/checklist/items/${itemId}/check`, { isChecked })).data,
    onMutate: async ({ itemId, isChecked }) => {
      queryClient.setQueryData<ChecklistFileDetail | undefined>(queryKey, (old) =>
        old
          ? { ...old, items: old.items.map((i) => (i.id === itemId ? { ...i, isChecked } : i)) }
          : old
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: ['checklist'] });
    },
  });

  const checkAll = useMutation({
    mutationFn: async (isChecked: boolean) => (await api.patch(`/checklist/files/${fileId}/check-all`, { isChecked })).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: ['checklist'] });
    },
  });

  const groups = useMemo(() => {
    if (!fileQ.data) return [];
    const map = new Map<string | null, typeof fileQ.data.items>();
    for (const item of fileQ.data.items) {
      const key = item.heading;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(item);
    }
    return Array.from(map.entries());
  }, [fileQ.data]);

  if (fileQ.isLoading) return <Loading label="Loading checklist…" />;
  if (fileQ.isError || !fileQ.data) return <ErrorState message="Could not load this checklist file." />;

  const { file, items } = fileQ.data;
  const checkedCount = items.filter((i) => i.isChecked).length;

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/checklist/units/${file.unit.id}`} className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← {file.unit.name}
        </Link>
        <h1 className="text-xl font-extrabold mt-1">{file.title}</h1>
      </div>

      <div className="card p-4 space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>
              Studied {checkedCount}/{items.length}
            </span>
            <span>{items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0}%</span>
          </div>
          <ProgressBar value={checkedCount} max={items.length} />
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary" disabled={checkAll.isPending} onClick={() => checkAll.mutate(true)}>
            Mark all studied
          </button>
          <button className="btn-secondary" disabled={checkAll.isPending} onClick={() => checkAll.mutate(false)}>
            Clear all
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {groups.map(([heading, groupItems]) => (
          <div key={heading ?? '__none'} className="space-y-2">
            {heading && <h3 className="text-sm font-bold text-brand-700 dark:text-brand-300">{heading}</h3>}
            <div className="card divide-y divide-slate-100 dark:divide-slate-800">
              {groupItems.map((item) => (
                <label key={item.id} className="flex items-start gap-3 p-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 rounded accent-brand-600"
                    checked={item.isChecked}
                    onChange={(e) => toggleItem.mutate({ itemId: item.id, isChecked: e.target.checked })}
                  />
                  <span className={item.isChecked ? 'text-sm text-slate-400 dark:text-slate-500 line-through' : 'text-sm'}>
                    <span className="font-semibold mr-1">{item.label}.</span>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
