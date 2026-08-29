import PriorityBadge from './PriorityBadge';

export default function PreviewQuestionCard({
  q,
}: {
  q: { questionText: string; unitName?: string; topicTitle?: string; priorityTag?: string };
}) {
  return (
    <div className="card p-4">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {q.unitName ? `${q.unitName} · ` : ''}
          {q.topicTitle}
        </div>
        {q.priorityTag && <PriorityBadge tag={q.priorityTag} />}
      </div>
      <div className="text-sm font-medium">{q.questionText}</div>
    </div>
  );
}
