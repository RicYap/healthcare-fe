import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
});

const getLabResult = async (apiKey: string | null) => {
  console.log(apiKey);

  return await api.get(`/lab-results`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Accept': 'application/json',           // Add this line
      'Content-Type': 'application/json',  
    },
  });
};

export default {
  getLabResult,
};
