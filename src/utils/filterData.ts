import { subDays } from 'date-fns';
import type { LabResult } from '../types/lab';

export function filterByTimeRange(data: LabResult[], range: string): LabResult[] {
  const today = new Date();
  let cutoffDate: Date;

  switch (range) {
    case '7days':
      cutoffDate = subDays(today, 7);
      break;
    case '30days':
      cutoffDate = subDays(today, 30);
      break;
    case '90days':
      cutoffDate = subDays(today, 90);
      break;
    default:
      return data;
  }

  return data.filter((item) => new Date(item.date) >= cutoffDate);
}