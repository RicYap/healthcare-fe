interface LabResult {
  id: string;
  userId: string;
  date: string;
  results: {
    glucose: number;
    cholesterol: {
      total: number;
      ldl: number;
      hdl: number;
    };
    bloodPressure: {
      systolic: number;
      diastolic: number;
    };
  };
}

export type {
    LabResult,
}