import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Stylish Spinner */}
        <div className="relative flex justify-center items-center mb-4">
          <div className="animate-spin rounded-full border-8 border-t-8 border-blue-500 border-opacity-70 h-24 w-24 mb-4 shadow-lg"></div>
          <div className="absolute animate-pulse bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full h-6 w-6"></div>
        </div>
        {/* Loading Text with fade effect */}
        <span className="text-white text-xl font-semibold animate-fadeIn">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;



