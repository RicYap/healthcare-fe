import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LabChart from "../components/Charts/HealthChart";
import { debounce } from "lodash";
import api from "../api/lab";

type LabResult = {
  id: string;
  date: string;
  results: {
    glucose?: number;
    cholesterol?: {
      total?: number;
      ldl?: number;
      hdl?: number;
    };
    bloodPressure?: {
      systolic?: number;
      diastolic?: number;
    };
  };
};

export default function Dashboard() {
  const { apiKey } = useAuth();
  const [labResults, setLabResults] = useState<LabResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function getLabResult(apiKey: string | null) {
    try {
      const res = await api.getLabResult(apiKey);
      console.log("res", res);
      
      setLabResults(res.data);
    } catch (error) {
      alert("Failed to load lab results");
    } finally {
      setLoading(false);
    }
  }

  const debounceGetLabResult = useCallback(debounce(getLabResult, 400), []);

  useEffect(() => {
    debounceGetLabResult(apiKey);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lab Results</h1>
        <Link
          to="/add-result"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add New Result
        </Link>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && labResults.length === 0 && <p>No lab results found.</p>}

      {labResults.length > 0 && <LabChart labResults={labResults} />}
    </div>
  );
}
