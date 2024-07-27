import React, { useState, useEffect } from 'react';
import logo from "../assets/vdpslog.png"; 
import "../index.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loader is active
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Hide loader after 4 seconds
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, [loading]);

  return (
    loading ? (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="relative h-36 w-36 sm:w-48 sm:h-48 md:w-64 md:h-64">
          <img src={logo} alt="Logo" className="w-full h-full opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute border-2 sm:border-4 border-gray-500 rounded-full w-52 h-52 animate-ripple"></div>
            <div className="absolute border-2 sm:border-4 border-gray-500 rounded-full w-72 h-72 animate-ripple animation-delay-500"></div>
            <div className="absolute border-2 sm:border-4 border-gray-500 rounded-full w-96 h-96 animate-ripple animation-delay-1000"></div>
          </div>
        </div>
        <div className="fixed inset-0 bg-white opacity-0 pointer-events-none"></div>
      </div>
    ) : null
  );
};

export default Loader;
