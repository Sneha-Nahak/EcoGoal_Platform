// components/HabitModal.jsx

import React from "react";

const HabitModal = ({ habit, onClose }) => {
  if (!habit) return null;

  return (
    <div className="fixed inset-0 bg-[#00a906] bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2">{habit.title}</h2>
        <p className="text-gray-700 mb-4">{habit.description}</p>
        <p className="text-sm">
          Status:{" "}
          <span
            className={`font-semibold ${
              habit.isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {habit.isActive ? "Active" : "Inactive"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default HabitModal;