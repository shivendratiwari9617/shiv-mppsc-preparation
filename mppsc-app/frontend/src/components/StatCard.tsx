import { ReactNode } from 'react';

export default function StatCard({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="card p-4 flex items-center gap-3">
      {icon && (
        <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 flex items-center justify-center text-lg">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
        <div className="text-xl font-bold leading-tight truncate">{value}</div>
        {sub && <div className="text-xs text-slate-500 dark:text-slate-400">{sub}</div>}
      </div>
    </div>
  );
}
