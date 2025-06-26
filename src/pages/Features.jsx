import React from "react";
import { FaCalendarAlt, FaSeedling, FaChartPie, FaBullseye } from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarAlt className="text-emerald-600 text-3xl" />,
    title: "Interactive Calendar",
    description:
      "Track your habits visually and intuitively with a streak-friendly calendar. Toggle completion with a click.",
  },
  {
    icon: <FaSeedling className="text-emerald-600 text-3xl" />,
    title: "Streak Progression",
    description:
      "Stay motivated with streaks that build momentum — and reset smartly when you skip. Gamify your growth.",
  },
  {
    icon: <FaChartPie className="text-emerald-600 text-3xl" />,
    title: "Visual Analytics",
    description:
      "Zoom out with weekly, monthly, and yearly summaries — all charted clearly to help you reflect and improve.",
  },
  {
    icon: <FaBullseye className="text-emerald-600 text-3xl" />,
    title: "Minimal UI, Max Clarity",
    description:
      "No clutter. No confusion. EcoGoals brings your habits front and center with a design that stays out of your way.",
  },
];

const Features = () => {
  return (
    <div className="bg-emerald-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">Why EcoGoals Works</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Designed with simplicity, motivation, and clarity in mind. These are the core features that help users stay on track and feel good doing it.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 space-y-4 hover:shadow-md transition"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-emerald-800">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;