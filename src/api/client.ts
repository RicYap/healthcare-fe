import axios from 'axios'

const BASE_URL = 'http://localhost:8080' // Adjust to your backend

export const createClient = (apiKey: string | null) =>
  axios.create({
    baseURL: BASE_URL,
    headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : {},
  })
