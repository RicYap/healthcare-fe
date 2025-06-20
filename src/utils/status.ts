import type { LabResult } from '../types/lab';

export function getGlucoseStatus(glucose: number): 'normal' | 'warning' | 'critical' {
  if (glucose < 70) return 'critical';
  if (glucose > 140) return 'warning';
  return 'normal';
}

export function getCholesterolStatus(cholesterol: LabResult['results']['cholesterol']): 'normal' | 'warning' | 'critical' {
  if (cholesterol.total > 240 || cholesterol.ldl > 160) return 'critical';
  if (cholesterol.total > 200 || cholesterol.ldl > 130) return 'warning';
  return 'normal';
}

export function getBloodPressureStatus(bp: LabResult['results']['bloodPressure']): 'normal' | 'warning' | 'critical' {
  if (bp.systolic > 180 || bp.diastolic > 120) return 'critical';
  if (bp.systolic > 140 || bp.diastolic > 90) return 'warning';
  return 'normal';
}