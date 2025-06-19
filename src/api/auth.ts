import api from "./client";

const signIn = async (email: string, password: string) => {
  return await api.post(`/auth/signin`, { email, password });
};

export default {
  signIn,
};
