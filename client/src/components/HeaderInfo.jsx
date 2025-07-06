import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import avatar from "../assets/mani.png"; // Use your actual avatar here

const HeaderInfo = () => {
  return (
    <div className="min-h-screen bg-[#031B34] text-white flex flex-col lg:flex-row items-center justify-center px-6 py-16 relative gap-12">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Hi, I'm <span className="text-blue-400">Mani Garg</span>
        </h1>
        <h2 className="text-xl font-semibold text-blue-400">Full Stack Developer</h2>
        <p className="text-sm text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
          B.Tech Electrical Engineering student at PEC Chandigarh with experience in React,
          Node.js, SQL, and MongoDB. Passionate about building responsive full-stack web apps and solving real-world problems with clean code and creativity.
        </p>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
          
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl mt-6 justify-center lg:justify-start">
          <a
            href="https://linkedin.com/in/mani-8897b1289/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mani-garg"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Mani1311008"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://leetcode.com/soa2004"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
            className="hover:text-blue-400 transition"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.codechef.com/users/soa2005"
            target="_blank"
            rel="noopener noreferrer"
            title="CodeChef"
            className="hover:text-blue-400 transition"
          >
            <SiCodechef />
          </a>
          
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center z-10 relative">
        <div className="p-2 bg-gradient-to-br from-blue-700 to-purple-600 rounded-xl shadow-xl">
          <img
            src={avatar}
            alt="Mani Avatar"
            className="rounded-xl shadow-lg max-w-[280px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
