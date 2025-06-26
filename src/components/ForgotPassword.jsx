import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post(`${import.meta.env.VITE_API_RESET_URL}/forgot-password`, { email });
      setStatus("Reset link sent! Check your inbox.");
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-emerald-200 shadow-md rounded-lg p-8 space-y-4 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-emerald-700 text-center">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-emerald-300 rounded p-3 focus:outline-none focus:ring focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white rounded py-2 hover:bg-emerald-700 transition"
        >
          Send Reset Link
        </button>
        {status && <p className="text-center text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;