import React from "react";
import { Link } from "react-router-dom";

const UnderMaintenence = () => {
  return (
    <>
      {/* Top spacer bar */}
      <div className="w-full h-18 sm:h-24 md:h-28 bg-neutral-800"></div>

      {/* Main Container */}
      <div className="my-4 w-full min-h-[60vh] px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center justify-center relative">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold hover:text-[#E31E24] text-neutral-600 transition-all duration-300 ease-in-out">
          Notice
        </h2>

        {/* Image */}
        <img
          src="/Under-Maintenance.jpg"
          alt="Under Maintenance"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold hover:text-neutral-900 transition-all duration-300 ease-in-out text-neutral-600 text-center">
          Page{" "}
          <span className="text-[#E31E24] transition-all duration-300 ease-in-out">
            Under Maintenance
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-300 ease-in-out text-center leading-relaxed">
          We’re working hard to improve this page. <br className="hidden sm:block"/> 
          Please check back soon for updates!
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-4 px-4 py-2 sm:px-5 sm:py-3 font-bold text-sm sm:text-base md:text-lg bg-[#E31E24] shadow-xl/30 text-white rounded-lg sm:rounded-xl transition-all duration-300 ease-in-out hover:bg-neutral-900"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default UnderMaintenence;
