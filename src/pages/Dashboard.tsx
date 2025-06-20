import { useCallback, useEffect, useState } from "react";
import type { LabResult } from "../types/lab";
import SummaryCards from "../components/SummaryCards";
import LabResultsTable from "../components/LabResultsTable";
import GlucoseChart from "../components/charts/GlucoseChart";
import CholesterolChart from "../components/charts/CholesterolChart";
import BloodPressureChart from "../components/charts/BloodPressureChart";
import api from "../api/lab";
import { debounce } from "lodash";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<"7days" | "30days" | "90days">(
    "30days"
  );
  const [labResults, setLabResults] = useState<LabResult[]>([]); // Fixed syntax here
  const [loading, setLoading] = useState(true); // Start with loading true

  const getLabResult = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.getLabResult();

      setLabResults(res.data);
    } catch (error) {
      console.error("Failed to load lab results:", error);
      alert("Failed to load lab results");
    } finally {
      setLoading(false);
    }
  }, []);

  const debounceGetLabResult = useCallback(debounce(getLabResult, 400), [
    getLabResult,
  ]);

  useEffect(() => {
    debounceGetLabResult();
  }, [debounceGetLabResult]);

  return (
    <div className="min-h-screen bg-gray-900">
      {loading ? (
        <div className="text-center py-8">
          <p>Loading...</p>
        </div>
      ) : labResults.length === 0 ? (
        <div className="text-center py-8">
          <p>No lab results found. Add some results!</p>
        </div>
      ) : (
        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold textColor">
              Lab Results Dashboard
            </h1>
            <div className="flex space-x-4">
              <select
                value={timeRange}
                onChange={(e) =>
                  setTimeRange(e.target.value as "7days" | "30days" | "90days")
                }
                className="border rounded-md px-3 py-2"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                + Add New Result
              </button>
            </div>
          </div>

          <SummaryCards data={labResults} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <GlucoseChart data={labResults} timeRange={timeRange} />
            <CholesterolChart data={labResults} timeRange={timeRange} />
            <div className="lg:col-span-2">
              <BloodPressureChart data={labResults} timeRange={timeRange} />
            </div>
          </div>

          <LabResultsTable data={labResults} />
        </main>
      )}
    </div>
  );
}
