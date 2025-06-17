import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

type LabResult = {
  id: string
  date: string
  results: {
    glucose?: number
    cholesterol?: {
      total?: number
      ldl?: number
      hdl?: number
    }
    bloodPressure?: {
      systolic?: number
      diastolic?: number
    }
  }
}

type Props = {
  labResults: LabResult[]
}

export default function LabChart({ labResults }: Props) {
  // Transform data for charts
  const data = labResults
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((lr) => ({
      date: lr.date,
      glucose: lr.results.glucose,
      cholesterolTotal: lr.results.cholesterol?.total,
      cholesterolLDL: lr.results.cholesterol?.ldl,
      cholesterolHDL: lr.results.cholesterol?.hdl,
      systolic: lr.results.bloodPressure?.systolic,
      diastolic: lr.results.bloodPressure?.diastolic,
    }))

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, bottom: 20, left: 10, right: 10 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="glucose" stroke="#8884d8" name="Glucose (mg/dL)" />
        <Line
          type="monotone"
          dataKey="cholesterolTotal"
          stroke="#82ca9d"
          name="Cholesterol Total (mg/dL)"
        />
        <Line
          type="monotone"
          dataKey="cholesterolLDL"
          stroke="#ffc658"
          name="Cholesterol LDL (mg/dL)"
        />
        <Line
          type="monotone"
          dataKey="cholesterolHDL"
          stroke="#ff7300"
          name="Cholesterol HDL (mg/dL)"
        />
        <Line type="monotone" dataKey="systolic" stroke="#888888" name="Systolic BP (mmHg)" />
        <Line type="monotone" dataKey="diastolic" stroke="#000000" name="Diastolic BP (mmHg)" />
      </LineChart>
    </ResponsiveContainer>
  )
}
