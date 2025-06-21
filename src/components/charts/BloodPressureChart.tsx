import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import type { LabResult } from "../../types/lab";
import { filterByTimeRange } from "../../utils/date";

interface BloodPressureChartProps {
  data: LabResult[];
  timeRange: "7days" | "30days" | "90days";
}

export default function BloodPressureChart({
  data,
  timeRange,
}: BloodPressureChartProps) {
  const filteredData = filterByTimeRange(data, timeRange);

  const chartData = {
    labels: filteredData.map((item) =>
      new Date(item.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Systolic",
        data: filteredData.map((item) => item.results.bloodPressure.systolic),
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.3,
      },
      {
        label: "Diastolic",
        data: filteredData.map((item) => item.results.bloodPressure.diastolic),
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: { display: true, text: "mmHg" },
        min: 50,
        max: 160,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow h-70 w-full">
      <h3 className="font-medium mb-2 text-black">Blood Pressure</h3>
      <div className="relative h-[calc(100%-2rem)]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
