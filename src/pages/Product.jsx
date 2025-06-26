import React from "react";
import { FaLeaf, FaCalendarCheck, FaChartBar, FaBolt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <FaCalendarCheck className="text-emerald-600 text-2xl" />,
    title: "Calendar-Based Habit Tracking",
    description:
      "Visualize your consistency day by day with an interactive calendar that supports toggling and highlights your active streaks.",
  },
  {
    icon: <FaChartBar className="text-emerald-600 text-2xl" />,
    title: "Data-Driven Insights",
    description:
      "Get clear weekly, monthly, and yearly breakdowns to identify habits that stick — powered by clean analytics and smart visualizations.",
  },
  {
    icon: <FaBolt className="text-emerald-600 text-2xl" />,
    title: "Streak Motivation Engine",
    description:
      "Celebrate momentum. Streaks update automatically and encourage commitment through rewarding visual feedback.",
  },
];

const Product = () => {

    const navigate = useNavigate();


  return (
    <div className="bg-white min-h-screen px-6 py-12 flex flex-col items-center text-center">
      <div className="max-w-4xl space-y-6">
        <div className="flex justify-center items-center gap-2 text-emerald-700 text-3xl font-bold">
          <FaLeaf />
          EcoGoals
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800">
          Build Better Habits, Sustainably.
        </h1>
        <p className="text-gray-600 text-lg">
          EcoGoals is your minimalist habit-tracking companion designed to keep you focused and motivated — one streak at a time. Whether you’re aiming for daily journaling, morning walks, or a screen-free hour, we turn your goals into visual progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-md transition text-left space-y-3">
              {feature.icon}
              <h3 className="text-lg font-semibold text-emerald-800">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10" style={{display:'flex', justifyContent:'center',gap:'2rem'}}>
          <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition" onClick={()=>navigate('/register')}>
            Start Tracking Now
          </button>
           <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition" onClick={()=>navigate('/')}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;