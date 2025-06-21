import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import type { LabResult } from "../../types/lab";
import { filterByTimeRange } from "../../utils/date";

interface GlucoseChartProps {
  data: LabResult[];
  timeRange: "7days" | "30days" | "90days";
}

export default function GlucoseChart({ data, timeRange }: GlucoseChartProps) {
  const filteredData = filterByTimeRange(data, timeRange);

  const chartData = {
    labels: filteredData.map((item) =>
      new Date(item.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Glucose (mg/dL)",
        data: filteredData.map((item) => item.results.glucose),
        borderColor: "#8B5CF6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: { display: true, text: "mg/dL" },
        min: 70,
        max: 200,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow h-70">
      <h3 className="font-medium mb-2 text-black">Blood Glucose</h3>
      <div className="relative h-[calc(100%-2rem)]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
