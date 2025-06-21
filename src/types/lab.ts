interface LabResult {
  userId: string | null;
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

interface LabResponse {
  id: string;
  userId: string | null;
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

export type { LabResult, LabResponse };
