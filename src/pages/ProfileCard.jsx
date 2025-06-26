import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfileCard = () => {
  const { user } = useContext(AuthContext);
  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4">
      <div
        className="w-full max-w-3xl sm:max-w-xl bg-white border border-emerald-200 rounded-2xl shadow-lg p-8 space-y-6"
        style={{ aspectRatio: "5 / 3" }}
      >
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-4xl font-bold text-emerald-700">
            {user.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-emerald-800">{user.name}</h2>
            <p className="text-md text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 text-gray-700 text-lg">
          You’re logged in and ready to grow. Let’s build that streak today! 💪
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;