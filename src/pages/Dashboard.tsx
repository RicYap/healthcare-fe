import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import LabChart from "../components/Charts/HealthChart";
import { debounce } from "lodash";
import api from "../api/lab";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LabResult {
  user_id: string;
  date: string;
  glucose: number;
  cholesterol_total: number;
  ldl: number;
  hdl: number;
  systolic: number;
  diastolic: number;
}
export default function Dashboard() {
  const [labResults, setLabResults] = useState<LabResult[]>([]);
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function getLabResult() {
    try {
      const res = await api.getLabResult();
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
    debounceGetLabResult();
  }, []);

  const glucoseData = labResults.map((r) => ({
    date: r.date,
    glucose: r.glucose,
  }));

  const cholesterolData = labResults.map((r) => ({
    date: r.date,
    total: r.cholesterol_total,
    ldl: r.ldl,
    hdl: r.hdl,
  }));

  const bloodPressureData = labResults.map((r) => ({
    date: r.date,
    systolic: r.systolic,
    diastolic: r.diastolic,
  }));

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lab Results Dashboard</h1>
        <div className="space-x-4">
          <Link to="/add" className="btn btn-primary">
            Add Result
          </Link>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="btn btn-secondary"
          >
            Logout
          </button>
        </div>
      </header>

      {loading ? (
        <p>Loading...</p>
      ) : labResults.length === 0 ? (
        <p>No lab results found. Add some results!</p>
      ) : (
        <>
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">
              Blood Sugar (Glucose)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={glucoseData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="glucose" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Cholesterol (mg/dL)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={cholesterolData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Line type="monotone" dataKey="ldl" stroke="#ff7300" />
                <Line type="monotone" dataKey="hdl" stroke="#387908" />
              </LineChart>
            </ResponsiveContainer>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2">
              Blood Pressure (mmHg)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={bloodPressureData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="systolic" stroke="#d88484" />
                <Line type="monotone" dataKey="diastolic" stroke="#8496d8" />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </>
      )}
    </div>
  );
}
