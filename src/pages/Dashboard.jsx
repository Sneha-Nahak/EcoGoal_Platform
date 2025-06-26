import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { HabitContext } from "../context/HabitContext";
import HabitModal from "../components/HabitModal";

const Dashboard = () => {
  const { habits, setHabits } = useContext(HabitContext);
  const [selectedHabit, setSelectedHabit] = useState(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_HABIT_URL}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHabits(res.data);
      } catch (err) {
        console.error("Error fetching habits:", err);
      }
    };

    fetchHabits();
  }, [setHabits]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits found. Start by creating one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <div
              key={habit._id}
              onClick={() => setSelectedHabit(habit)}
              className="cursor-pointer bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{habit.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{habit.description}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  habit.isActive
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {habit.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          ))}
        </div>
      )}
      <HabitModal habit={selectedHabit} onClose={() => setSelectedHabit(null)} />
    </div>
  );
};

export default Dashboard;