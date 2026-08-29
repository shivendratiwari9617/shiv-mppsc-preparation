export default function ProgressBar({ value, max, colorClass }: { value: number; max: number; colorClass?: string }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="progress-bar">
      <div style={{ width: `${pct}%` }} className={colorClass} />
    </div>
  );
}
