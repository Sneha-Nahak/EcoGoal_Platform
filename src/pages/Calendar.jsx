import React, { useContext, useEffect, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import axios from "axios";
import dayjs from "../utils/dayjs";

const VITE_API_LOG_URL = import.meta.env.VITE_API_LOG_URL;

const Calendar = () => {
  const { habits, logs, setLogs } = useContext(HabitContext);
  const [selectedHabitId, setSelectedHabitId] = useState("");

  const selectedHabit = habits.find((h) => h._id === selectedHabitId);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedHabitId");
    if (storedId && habits.length > 0) {
      const match = habits.find((h) => h._id === storedId);
      if (match) setSelectedHabitId(storedId);
      else localStorage.removeItem("selectedHabitId");
    }
  }, [habits]);

  useEffect(() => {
    const fetchLogs = async () => {
      if (!selectedHabitId) return;
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${VITE_API_LOG_URL}?habitId=${selectedHabitId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLogs(res.data);
      } catch (err) {
        console.error("Error fetching logs:", err);
      }
    };

    fetchLogs();
  }, [selectedHabitId, setLogs]);

  const getDaysInMonth = () => {
    const now = dayjs();
    const start = now.startOf("month");
    const end = now.endOf("month");
    const days = [];
    for (let d = start; d.isBefore(end) || d.isSame(end); d = d.add(1, "day")) {
      days.push(d);
    }
    return days;
  };

  const isCompleted = (date) => {
    return logs?.some(
      (log) => dayjs(log.date).isSame(date, "day") && log.completed
    );
  };

  const handleToggleComplete = async (date) => {
    if (!selectedHabitId) return;
    const token = localStorage.getItem("token");

    const alreadyCompleted = logs?.some(
      (log) => dayjs(log.date).isSame(date, "day") && log.completed
    );

    try {
      await axios.post(
        VITE_API_LOG_URL,
        {
          habitId: selectedHabitId,
          date: date.toISOString(),
          completed: !alreadyCompleted,
          notes: "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedLogs = await axios.get(
        `${VITE_API_LOG_URL}?habitId=${selectedHabitId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLogs(updatedLogs.data);
    } catch (error) {
      console.error("Error toggling completion:", error);
    }
  };

  const today = dayjs();

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Habit Calendar</h2>

      <select
        value={selectedHabitId}
        onChange={(e) => {
          setSelectedHabitId(e.target.value);
          localStorage.setItem("selectedHabitId", e.target.value);
        }}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Select a habit</option>
        {habits.map((habit) => (
          <option key={habit._id} value={habit._id}>
            {habit.name}
          </option>
        ))}
      </select>

      {selectedHabit && (
        <div>
          <h3 className="text-lg font-semibold mt-4">
            Tracking: {selectedHabit.name}
          </h3>
          <div className="grid grid-cols-7 gap-2 mt-4">
            {getDaysInMonth().map((day) => {
              const isTodayorBefore =
                day.isSame(today, "day") || day.isBefore(today, "day");
              const completed = isCompleted(day);
              let bgColor = "bg-gray-100 text-gray-400";
              if (!isTodayorBefore) {
                bgColor = "bg-gray-200 text-gray-300";
              } else if (completed) {
                bgColor = "bg-emerald-200 text-emerald-800 font-semibold";
              }

              return (
                <div
                  key={day.format("YYYY-MM-DD")}
                  onClick={() => isTodayorBefore && handleToggleComplete(day)}
                  className={`p-3 rounded-md text-center text-sm shadow-sm h-16 flex flex-col items-center justify-center transition cursor-pointer ${bgColor}`}
                >
                    <div>{day.format("D")}</div>
                    {completed && <span className="text-lg">✨</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
