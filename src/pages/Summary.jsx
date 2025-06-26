import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

import React, { useContext, useEffect, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import dayjs from "../utils/dayjs";

const Summary = () => {
  const { habits } = useContext(HabitContext);
  const [selectedHabitId, setSelectedHabitId] = useState("");
  const [summary, setSummary] = useState({
    weekly: {},
    monthly: {},
    yearly: {},
  });

  useEffect(() => {
    const fetchSummary = async () => {
      if (!selectedHabitId) return;
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_LOG_URL
          }/summary?habitId=${selectedHabitId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSummary(res.data);
      } catch (err) {
        console.error("Error fetching summary:", err);
      }
    };

    fetchSummary();
  }, [selectedHabitId]);

  const buildChartData = (data, label) => {
    const labels = Object.keys(data).slice(-6);
    const values = labels.map((key) => data[key]);

    return {
      labels,
      datasets: [
        {
          label,
          data: values,
          backgroundColor: "#38A169",
          hoverBackgroundColor: "#2F855A",
          borderRadius: 6,
          barThickness: 30,
        },
      ],
    };
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: { color: "#2F855A", beginAtZero: true },
        grid: { color: "#E6FFFA" },
      },
      x: {
        ticks: { color: "#2F855A" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-emerald-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-emerald-800">Habit Summary</h2>

        <select
          value={selectedHabitId}
          onChange={(e) => setSelectedHabitId(e.target.value)}
          className="border border-emerald-300 rounded p-2"
        >
          <option value="">Select a habit</option>
          {habits.map((habit) => (
            <option key={habit._id} value={habit._id}>
              {habit.name}
            </option>
          ))}
        </select>

        {selectedHabitId && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {["weekly", "monthly", "yearly"].map((range) => (
              <div
                key={range}
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <h4 className="text-emerald-700 font-semibold mb-2 text-center capitalize">
                  {range}
                </h4>
                {Object.keys(summary[range]).length > 0 ? (
                  <Bar
                    data={buildChartData(summary[range], `${range} summary`)}
                    options={chartOptions}
                  />
                ) : (
                  <p className="text-sm text-center text-gray-500">
                    No data available this {range}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
