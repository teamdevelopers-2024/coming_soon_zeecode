// ComingSoon.js
import React, { useState } from "react";
import logo from './assets/Untitled (4).jpg'

const ComingSoon = () => {
  const [state, setState] = useState('Notify Me');

  const handleClick = () => {
    // Toggle state message between "Notify Me" and "Notified"
    setState((prevState) => ('Notified'));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
      {/* Logo and Brand Name */}
      <div className="flex flex-col items-center space-y-3 mb-10">
        {/* Placeholder Logo */}
        <div className=" p-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
          <img src={logo} className="w-32 h-32 rounded-full transform hover:scale-110" alt="Zeecode Solutions Logo" />
        </div>
        {/* Brand Name */}
        <h2 className="text-2xl md:text-4xl font-semibold">Zeecode Solutions</h2>
      </div>
      
      {/* Title and Subtitle with Animation */}
      <div className="text-center space-y-6 md:space-y-10">
        <h1 className="text-4xl md:text-6xl font-bold animate-bounce">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl animate-pulse opacity-80">
          We're crafting something amazing just for you. Stay tuned!
        </p>
      </div>

      {/* Loading Dots Animation */}
      <div className="flex space-x-2 mt-8 md:mt-12">
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-400 animate-bounce delay-100"></div>
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-400 animate-bounce delay-200"></div>
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-400 animate-bounce delay-300"></div>
      </div>

      {/* Notify Me Button */}
      <button
        onClick={handleClick}
        className={`${
          state === 'Notify Me' ? 'bg-gray-700' : 'bg-green-500'
        } mt-10 md:mt-16 px-6 py-3 md:px-8 md:py-4 rounded-full text-white hover:bg-gray-600 transition duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105`}
      >
        {state}
      </button>
    </div>
  );
};

export default ComingSoon;
