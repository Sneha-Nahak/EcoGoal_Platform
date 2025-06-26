import React, { useState } from "react";
import axios from "axios";

const Company = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post(import.meta.env.VITE_API_CONTACT_URL, form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 px-6 py-12 flex flex-col items-center">
      <div className="max-w-2xl text-center space-y-4 mb-10">
        <h1 className="text-3xl font-bold text-emerald-800">About Our Company</h1>
        <p className="text-gray-700">
          EcoGoals is more than a habit tracker — it's a philosophy. We're focused on helping you build daily rhythm through simplicity, reflection, and gentle accountability.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-md border border-emerald-200 rounded-xl p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-emerald-700">Contact Us</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-emerald-300 focus:ring focus:ring-emerald-400"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-emerald-300 focus:ring focus:ring-emerald-400"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-3 rounded border border-emerald-300 focus:ring focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="w-full py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};

export default Company;