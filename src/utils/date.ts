type TimeRange = '7days' | '30days' | '90days';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function filterByTimeRange<T extends { date: string }>(
  data: T[],
  range: string // Accept any string, but validate below
): T[] {
  // Validate the input
  const validRanges: TimeRange[] = ['7days', '30days', '90days'];
  const safeRange: TimeRange = validRanges.includes(range as TimeRange) 
    ? (range as TimeRange) 
    : '30days'; // Fallback to default

  const today = new Date();
  let daysToSubtract: number;

  switch (safeRange) {
    case '7days':
      daysToSubtract = 7;
      break;
    case '30days':
      daysToSubtract = 30;
      break;
    case '90days':
      daysToSubtract = 90;
      break;
    default:
      return data;
  }

  const cutoffDate = new Date(today);
  cutoffDate.setDate(today.getDate() - daysToSubtract);

  return data.filter((item) => new Date(item.date) >= cutoffDate);
}