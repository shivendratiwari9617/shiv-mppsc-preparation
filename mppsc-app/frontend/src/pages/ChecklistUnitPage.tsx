import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, ChecklistFileSummary, ChecklistUnitDetail } from '../api/client';
import { ErrorState, Loading } from '../components/Feedback';
import ProgressBar from '../components/ProgressBar';

function FileRow({ file }: { file: ChecklistFileSummary }) {
  const pct = file.itemCount > 0 ? Math.round((file.checkedCount / file.itemCount) * 100) : 0;
  return (
    <Link to={`/checklist/files/${file.id}`} className="card p-4 flex items-center justify-between gap-3 hover:border-brand-400 transition">
      <div className="min-w-0">
        <div className="font-medium truncate">{file.title}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {file.checkedCount}/{file.itemCount} studied
        </div>
      </div>
      <div className="w-24 shrink-0">
        <ProgressBar value={file.checkedCount} max={file.itemCount} />
        <div className="text-right text-[11px] text-slate-500 dark:text-slate-400 mt-1">{pct}%</div>
      </div>
    </Link>
  );
}

export default function ChecklistUnitPage() {
  const { id } = useParams();
  const unitId = Number(id);

  const unitQ = useQuery({
    queryKey: ['checklist', 'unit', unitId],
    queryFn: async () => (await api.get<ChecklistUnitDetail>(`/checklist/units/${unitId}`)).data,
    enabled: Number.isFinite(unitId),
  });

  const groups = useMemo(() => {
    if (!unitQ.data) return [];
    const map = new Map<string | null, ChecklistFileSummary[]>();
    for (const f of unitQ.data.files) {
      const key = f.groupLabel;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(f);
    }
    return Array.from(map.entries());
  }, [unitQ.data]);

  if (unitQ.isLoading) return <Loading label="Loading unit…" />;
  if (unitQ.isError || !unitQ.data) return <ErrorState message="Could not load this checklist unit." />;

  const { unit, files } = unitQ.data;
  const itemCount = files.reduce((s, f) => s + f.itemCount, 0);
  const checkedCount = files.reduce((s, f) => s + f.checkedCount, 0);

  return (
    <div className="space-y-6">
      <div>
        <Link to="/checklist" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">
          ← All checklist units
        </Link>
        <div className="mt-1">
          <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">{unit.code}</div>
          <h1 className="text-2xl font-extrabold">{unit.name}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{files.length} files</p>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex justify-between text-sm mb-1">
          <span>
            Studied {checkedCount}/{itemCount}
          </span>
          <span>{itemCount > 0 ? Math.round((checkedCount / itemCount) * 100) : 0}%</span>
        </div>
        <ProgressBar value={checkedCount} max={itemCount} />
      </div>

      <div className="space-y-5">
        {groups.map(([groupLabel, groupFiles]) => (
          <div key={groupLabel ?? '__root'} className="space-y-2">
            {groupLabel && <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{groupLabel}</h3>}
            {groupFiles.map((f) => (
              <FileRow key={f.id} file={f} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
