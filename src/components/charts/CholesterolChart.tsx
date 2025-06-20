import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import type { LabResult } from '../../types/lab';
import { filterByTimeRange } from '../../utils/date';

interface CholesterolChartProps {
  data: LabResult[];
  timeRange: '7days' | '30days' | '90days';
}

export default function CholesterolChart({ data, timeRange }: CholesterolChartProps) {
  const filteredData = filterByTimeRange(data, timeRange);

  const chartData = {
    labels: filteredData.map((item) => new Date(item.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Total',
        data: filteredData.map((item) => item.results.cholesterol.total),
        backgroundColor: '#3B82F6'
      },
      {
        label: 'LDL',
        data: filteredData.map((item) => item.results.cholesterol.ldl),
        backgroundColor: '#EF4444'
      },
      {
        label: 'HDL',
        data: filteredData.map((item) => item.results.cholesterol.hdl),
        backgroundColor: '#10B981'
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: { 
        stacked: true,
        title: { display: true, text: 'mg/dL' }
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow h-64">
      <h3 className="font-medium mb-2">Cholesterol Levels</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
}