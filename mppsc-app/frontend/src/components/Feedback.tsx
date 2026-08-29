export function Loading({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16 text-slate-500 dark:text-slate-400 gap-2">
      <span className="h-5 w-5 rounded-full border-2 border-brand-600 border-t-transparent animate-spin" />
      {label}
    </div>
  );
}

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="card p-6 text-center text-red-600 dark:text-red-400">
      <div className="text-2xl mb-2">⚠️</div>
      {message}
    </div>
  );
}
