import type { LabResult } from "../types/lab";
import StatusBadge from "./StatusBadge";
import {
  getGlucoseStatus,
  getCholesterolStatus,
  getBloodPressureStatus,
} from "../utils/status";

interface SummaryCardsProps {
  data: LabResult[];
}

export default function SummaryCards({ data }: SummaryCardsProps) {
  const latestResult = data[0];
  console.log("latestResult", latestResult);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Blood Sugar Card */}
      <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-lg shadow">
        <div className="flex justify-between">
          <div>
            <p className="text-sm textColor">Blood Sugar</p>
            <p className="text-2xl font-bold">
              {latestResult.results.glucose} mg/dL
            </p>
          </div>
          <StatusBadge
            status={getGlucoseStatus(latestResult.results.glucose)}
          />
        </div>
      </div>

      {/* Cholesterol Card */}
      <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-lg shadow">
        <div className="flex justify-between">
          <div>
            <p className="text-sm textColor">Cholesterol</p>
            <p className="text-2xl font-bold">
              {latestResult.results.cholesterol.total} mg/dL
            </p>
          </div>
          <StatusBadge
            status={getCholesterolStatus(latestResult.results.cholesterol)}
          />
        </div>
      </div>

      {/* Blood Pressure Card */}
      <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-lg shadow">
        <div className="flex justify-between">
          <div>
            <p className="text-sm textColor">Blood Pressure</p>
            <p className="text-2xl font-bold">
              {latestResult.results.bloodPressure.systolic}/
              {latestResult.results.bloodPressure.diastolic} mmHg
            </p>
          </div>
          <StatusBadge
            status={getBloodPressureStatus(latestResult.results.bloodPressure)}
          />
        </div>
      </div>
    </div>
  );
}
