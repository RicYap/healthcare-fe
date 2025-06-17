import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { createClient } from '../api/client'
import { useNavigate } from 'react-router-dom'

export default function AddResult() {
  const { apiKey } = useAuth()
  const navigate = useNavigate()

  const [date, setDate] = useState('')
  const [glucose, setGlucose] = useState<number | ''>('')
  const [cholesterolTotal, setCholesterolTotal] = useState<number | ''>('')
  const [ldl, setLDL] = useState<number | ''>('')
  const [hdl, setHDL] = useState<number | ''>('')
  const [systolic, setSystolic] = useState<number | ''>('')
  const [diastolic, setDiastolic] = useState<number | ''>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!apiKey) return

    const client = createClient(apiKey)

    const payload = {
      date,
      results: {
        glucose: glucose === '' ? undefined : glucose,
        cholesterol: {
          total: cholesterolTotal === '' ? undefined : cholesterolTotal,
          ldl: ldl === '' ? undefined : ldl,
          hdl: hdl === '' ? undefined : hdl,
        },
        bloodPressure: {
          systolic: systolic === '' ? undefined : systolic,
          diastolic: diastolic === '' ? undefined : diastolic,
        },
      },
    }

    try {
      await client.post('/lab-results', payload)
      navigate('/dashboard')
    } catch {
      alert('Failed to add result')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl mb-6 font-bold">Add Lab Result</h2>
      <input
        type="date"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Glucose (mg/dL)"
        value={glucose}
        onChange={(e) => setGlucose(e.target.value === '' ? '' : +e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Cholesterol Total (mg/dL)"
        value={cholesterolTotal}
        onChange={(e) => setCholesterolTotal(e.target.value === '' ? '' : +e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="LDL (mg/dL)"
        value={ldl}
        onChange={(e) => setLDL(e.target.value === '' ? '' : +e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="HDL (mg/dL)"
        value={hdl}
        onChange={(e) => setHDL(e.target.value === '' ? '' : +e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Systolic BP (mmHg)"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value === '' ? '' : +e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Diastolic BP (mmHg)"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value === '' ? '' : +e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Add Result
      </button>
    </form>
  )
}
