import api from "./client";

const getUserProfile = async (userId: string) => {
  return await api.get(`/user/profile?userId=${userId}`);
};

export default {
  getUserProfile,
};
