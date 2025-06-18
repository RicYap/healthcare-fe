// pages/ProfilePage.tsx
import { useCallback, useEffect, useState } from "react";
import api from "../api/lab";
import { debounce } from "lodash";

interface UserProfile {
  id: string;
  email: string;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const debounceGetUserProfile = useCallback(debounce(getUserProfile, 400), []);

  async function getUserProfile(userId: string) {
    try {
      const res = await api.getUserProfile(userId);
      setProfile(res.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load user profile");
    }
  }

  useEffect(() => {
    debounceGetUserProfile("35616318-84ee-4c3d-b61a-38743369c999");
  }, []);

  if (loading) return <div className="p-4">Loading profile...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p>
        <strong>User ID:</strong> {profile?.id}
      </p>
      <p>
        <strong>Email:</strong> {profile?.email}
      </p>
    </div>
  );
};

export default ProfilePage;
