import axios from "axios";

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
// Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include api key
api.interceptors.request.use(
  (config) => {
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey && config.headers && typeof config.headers.set === "function") {
      config.headers.set("Authorization", `Bearer ${apiKey}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const getLabResult = async () => {
  return await api.get(`/lab-results`);
};

const addLabResult = async (data: LabResult) => {
  return await api.post(`/lab-results`, data);
};

const getUserProfile = async (userId: string) => {
  return await api.get(`/user/profile?userId=${userId}`);
};

export default {
  getLabResult,
  addLabResult,
  getUserProfile,
};
