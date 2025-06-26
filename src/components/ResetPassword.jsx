import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Resetting...");
    try {
        console.log("Reset token:", token);
      await axios.post(
        `${import.meta.env.VITE_API_RESET_URL}/reset-password/${token}`,
        { password }
      );
      
      setStatus("Password updated! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("Invalid or expired token.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-emerald-200 shadow-md rounded-lg p-8 space-y-4 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-emerald-700 text-center">Reset Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-emerald-300 rounded p-3 focus:outline-none focus:ring focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white rounded py-2 hover:bg-emerald-700 transition"
        >
          Reset Password
        </button>
        {status && <p className="text-center text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;