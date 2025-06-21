import { useCallback, useState } from "react";
import api from "../api/lab";
import { useNavigate, Link } from "react-router-dom";
import { debounce } from "lodash";
import type { LabResult } from "../types/lab";

export default function AddResult() {
  const [date, setDate] = useState("");
  const [glucose, setGlucose] = useState("");
  const [cholesterolTotal, setCholesterolTotal] = useState("");
  const [cholesterolLDL, setCholesterolLDL] = useState("");
  const [cholesterolHDL, setCholesterolHDL] = useState("");
  const [bpSystolic, setBpSystolic] = useState("");
  const [bpDiastolic, setBpDiastolic] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function addLabResults(data: LabResult) {
    try {
      await api.addLabResult(data);

      navigate("/dashboard");
    } catch (error) {
      setError("Failed to add lab result.");
    }
  }

  const debounceAddLabResults = useCallback(debounce(addLabResults, 400), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!date) {
      setError("Please select a date");
      return;
    }
    const dateObj = new Date(date); 
    const formattedDate = dateObj.toISOString(); 

    const userId = localStorage.getItem("userId")

    const labInput: LabResult = {
      userId: userId,
      date: formattedDate,
      results: {
        glucose: parseFloat("98"),
        cholesterol: {
          total: parseFloat("178"),
          ldl: parseFloat("110"),
          hdl: parseFloat("52"),
        },
        bloodPressure: {
          systolic: parseFloat("122"),
          diastolic: parseFloat("78"),
        },
      },
    };

    debounceAddLabResults(labInput);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl mb-6 font-semibold">Add Lab Result</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-600">{error}</p>}
        <label className="block">
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="input input-bordered w-full"
          />
        </label>
        <label className="block">
          Blood Sugar (Glucose) mg/dL:
          <input
            type="number"
            value={glucose}
            onChange={(e) => setGlucose(e.target.value)}
            required
            className="input input-bordered w-full"
            min={0}
          />
        </label>
        <label className="block">
          Cholesterol Total mg/dL:
          <input
            type="number"
            value={cholesterolTotal}
            onChange={(e) => setCholesterolTotal(e.target.value)}
            required
            className="input input-bordered w-full"
            min={0}
          />
        </label>
        <label className="block">
          Cholesterol LDL mg/dL:
          <input
            type="number"
            value={cholesterolLDL}
            onChange={(e) => setCholesterolLDL(e.target.value)}
            required
            className="input input-bordered w-full"
            min={0}
          />
        </label>
        <label className="block">
          Cholesterol HDL mg/dL:
          <input
            type="number"
            value={cholesterolHDL}
            onChange={(e) => setCholesterolHDL(e.target.value)}
            required
            className="input input-bordered w-full"
            min={0}
          />
        </label>
        <label className="block">
          Blood Pressure Systolic mmHg:
          <input
            type="number"
            value={bpSystolic}
            onChange={(e) => setBpSystolic(e.target.value)}
            required
            className="input input-bordered w-full"
            min={0}
          />
        </label>
        <label className="block">
          Blood Pressure Diastolic mmHg:
          <input
            type="number"
            value={bpDiastolic}
            onChange={(e) => setBpDiastolic(e.target.value)}
            required
            className="input input-bordered w-full"
            min={0}
          />
        </label>
        <button type="submit" className="btn btn-primary w-full">
          Add Result
        </button>
      </form>
      <div className="mt-4">
        <Link to="/dashboard" className="text-blue-600 underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
