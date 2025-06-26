import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
return (
<footer className="bg-white border-t border-gray-200 text-gray-700">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
{/* Brand Logo */}
<div className="flex items-center gap-2 text-[#00a63b] font-semibold text-xl">
<FaLeaf className="text-[#00a63b]" />
<Link to="/">EcoGoals</Link>
</div>


   
    <p className="text-sm text-gray-500 text-center md:text-left">
      &copy; {new Date().getFullYear()} EcoGoals. All rights reserved.
    </p>

    {/* Social Icons */}
    <div className="flex gap-4 text-[#00a63b] text-lg">
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-700 transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-700 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-700 transition"
      >
        <FaTwitter />
      </a>
    </div>
  </div>
</footer>
);
};

export default Footer;