import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg border border-emerald-200 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-emerald-800 text-center">About This Project</h1>

        <p className="text-gray-700 text-lg">
          <span className="font-semibold text-emerald-700">EcoGoals</span> is a minimalist, streak-based habit tracking application designed for users who want to visualize consistency and build habits one day at a time. With a clean interface and insightful feedback loops, it helps you stay focused without feeling overwhelmed.
        </p>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-emerald-800 mb-2">👩‍💻 About the Developer</h2>
          <p className="text-gray-600">
            Hi, I'm <span className="font-semibold text-emerald-700">Sneha Nahak</span> — a developer who enjoys building small tools that make life a little easier. This project was born out of curiosity and the desire to create something genuinely helpful. EcoGoals continues to be a learning space and a passion project aimed at simplicity, clarity, and usefulness.
          </p>

          <ul className="mt-4 flex gap-4 text-emerald-600 text-xl">
            <li>
              <a
                href="https://github.com/Sneha-Nahak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-800"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sneha-nahak-s3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-800"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://sneha-nahak.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-800"
              >
                <FaGlobe />
              </a>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t text-center text-sm text-gray-400">
          Built with 💚 using React, Tailwind CSS, Node.js, Express.js, MongoDB — and a little extra focus.
        </div>
      </div>
    </div>
  );
};

export default About;