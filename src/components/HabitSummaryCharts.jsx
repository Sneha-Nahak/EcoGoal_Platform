import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import dayjs from "../utils/dayjs";

const HabitSummaryCharts = ({ habitId }) => {
  const [summary, setSummary] = useState({ weekly: {}, monthly: {}, yearly: {} });

  useEffect(() => {
    const fetchSummary = async () => {
      if (!habitId) return;
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${import.meta.env.VITE_API_LOG_URL}/summary?habitId=${habitId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSummary(res.data);
      } catch (err) {
        console.error("Error fetching summary:", err);
      }
    };

    fetchSummary();
  }, [habitId]);

  const buildChartData = (data, label) => {
    const labels = Object.keys(data).slice(-6); // last 6 periods
    const values = labels.map((key) => data[key]);

    return {
      labels,
      datasets: [
        {
          label,
          data: values,
          backgroundColor: [
            "#38A169",
            "#48BB78",
            "#68D391",
            "#9AE6B4",
            "#C6F6D5",
            "#E6FFFA",
          ],
        },
      ],
    };
  };

  const chartOptions = {
    cutout: "60%",
    plugins: {
      legend: { position: "bottom", labels: { color: "#2F855A" } },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-emerald-700 font-semibold mb-2 text-center">Weekly</h4>
        <Doughnut data={buildChartData(summary.weekly, "Weekly")} options={chartOptions} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-emerald-700 font-semibold mb-2 text-center">Monthly</h4>
        <Doughnut data={buildChartData(summary.monthly, "Monthly")} options={chartOptions} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-emerald-700 font-semibold mb-2 text-center">Yearly</h4>
        <Doughnut data={buildChartData(summary.yearly, "Yearly")} options={chartOptions} />
      </div>
    </div>
  );
};

export default HabitSummaryCharts;