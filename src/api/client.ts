import axios from "axios";

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

export default api;
