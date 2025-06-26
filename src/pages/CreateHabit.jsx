import React, { useState } from "react";
import axios from "axios";

const CreateHabit = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        import.meta.env.VITE_API_HABIT_URL,
        { name, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setName("");
      setDescription("");
      onSuccess?.();
    } catch (err) {
      console.error("Error creating habit:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <form
      onSubmit={handleCreate}
      className="bg-emerald-50 p-6 rounded-xl shadow-md space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-emerald-800">Create a New Habit</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Habit name"
        required
        className="w-full p-3 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white text-emerald-800"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        className="w-full p-3 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white text-emerald-800"
        rows={4}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-medium transition"
      >
        {loading ? "Creating..." : "Create Habit"}
      </button>
    </form>
    </div>
  );
};

export default CreateHabit;