import api from "./client";

const signIn = async (email: string, password: string) => {
  return await api.post(`/auth/signin`, { email, password });
};

const signUp = async (email: string, password: string) => {
  return await api.post(`/auth/signup`, { email, password });
};

export default {
  signIn,
  signUp,
};
