// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <nav className="bg-zinc-500 bg-opacity-20 backdrop-blur-md border border-gray-200 shadow-md fixed w-[90%] rounded-lg py-3">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ">
          <img src="src/assets/Alertcode Logo White.png" alt="Logo" className="h-[50px] w-[220px] " />
        </div>
        <ul className="flex space-x-4">
          <li className="relative">
            <a
              href="#home"
              className={`text-white py-2 px-4 rounded-lg transition-all inline-block group
                hover:text-teal-400 hover:scale-105
                ${activeButton === "home" 
                  ? "border-[2px] border-gradient-to-r from-green-500 via-teal-500 via-blue-500 via-pink-500 via-red-500 via-orange-500 to-yellow-500 shadow-[0_4px_15px_rgba(0,255,255,0.7)]" 
                  : "border-transparent"}`}
              onClick={() => handleClick("home")}
            >
              Home
            </a>
          </li>
          <li className="relative">
            <a
              href="#about"
              className={`text-white py-2 px-4 rounded-lg transition-all inline-block group
                hover:text-teal-400 hover:scale-105
                ${activeButton === "about" 
                  ? "border-[2px] border-gradient-to-r from-green-500 via-teal-500 via-blue-500 via-pink-500 via-red-500 via-orange-500 to-yellow-500 shadow-[0_4px_15px_rgba(0,255,255,0.7)]" 
                  : "border-transparent"}`}
              onClick={() => handleClick("about")}
            >
              About
            </a>
          </li>
          <li className="relative">
            <a
              href="#services"
              className={`text-white py-2 px-4 rounded-lg transition-all inline-block group
                hover:text-teal-400 hover:scale-105
                ${activeButton === "services" 
                  ? "border-[2px] border-gradient-to-r from-green-500 via-teal-500 via-blue-500 via-pink-500 via-red-500 via-orange-500 to-yellow-500 shadow-[0_4px_15px_rgba(0,255,255,0.7)]" 
                  : "border-transparent"}`}
              onClick={() => handleClick("services")}
            >
              Services
            </a>
          </li>
          <li className="relative">
            <a
              href="#contact"
              className={`text-white py-2 px-4 rounded-lg transition-all inline-block group
                hover:text-teal-400 hover:scale-105
                ${activeButton === "contact" 
                  ? "border-[2px] border-gradient-to-r from-green-500 via-teal-500 via-blue-500 via-pink-500 via-red-500 via-orange-500 to-yellow-500 shadow-[0_4px_15px_rgba(0,255,255,0.7)]" 
                  : "border-transparent"}`}
              onClick={() => handleClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
