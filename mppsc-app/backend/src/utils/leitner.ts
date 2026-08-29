const BOX_INTERVAL_DAYS: Record<number, number> = {
  1: 0,
  2: 1,
  3: 3,
  4: 7,
  5: 14,
};

export function nextBoxAfter(currentBox: number | undefined | null, isCorrect: boolean): number {
  if (!isCorrect) return 1;
  const current = currentBox || 1;
  return Math.min(current + 1, 5);
}

export function computeNextDueDate(box: number): Date {
  const days = BOX_INTERVAL_DAYS[box] ?? 1;
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(0, 0, 0, 0);
  return d;
}
