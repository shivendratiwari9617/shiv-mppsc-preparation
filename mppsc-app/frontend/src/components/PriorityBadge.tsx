export function priorityBadgeClass(tag: string): string {
  switch (tag) {
    case 'VERY_HIGH':
      return 'badge-very-high';
    case 'HIGH':
      return 'badge-high';
    case 'MEDIUM':
      return 'badge-medium';
    default:
      return 'badge-low';
  }
}

export function priorityLabel(tag: string): string {
  switch (tag) {
    case 'VERY_HIGH':
      return 'Very High';
    case 'HIGH':
      return 'High';
    case 'MEDIUM':
      return 'Medium';
    case 'LOW':
      return 'Low';
    default:
      return tag;
  }
}

export default function PriorityBadge({ tag }: { tag: string }) {
  return <span className={priorityBadgeClass(tag)}>{priorityLabel(tag)}</span>;
}
