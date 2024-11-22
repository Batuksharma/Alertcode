// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-zinc-500 bg-opacity-20 backdrop-blur-md border border-gray-200 shadow-md fixed w-[90%] rounded-lg py-3">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Brand</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;