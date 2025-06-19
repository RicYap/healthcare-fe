import api from "./client";
import type { LabResult } from "../types/lab";

const getLabResult = async () => {
  return await api.get(`/lab-results`);
};

const addLabResult = async (data: LabResult) => {
  return await api.post(`/lab-results`, data);
};

export default {
  getLabResult,
  addLabResult,
};
