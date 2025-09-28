import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      {/* Top spacer bar */}
      <div className="w-full h-18 sm:h-24 md:h-28 bg-neutral-800"></div>

      {/* Main Container */}
      <div className="my-6 w-full cursor-pointer min-h-[60vh] px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center justify-center relative">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold hover:text-[#E31E24] absolute top-0 left-[46.2%] text-neutral-600 transition-all duration-300 ease-in-out">
          Error
        </h2>

        {/* Image */}
        <img
          src="/Not-Found.jpg"
          alt="404 Not Found"
          className="w-full max-w-xs mt-8 sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold hover:text-neutral-900 transition-all duration-300 ease-in-out text-neutral-600 text-center">
          Page{" "}
          <span className="text-[#E31E24] transition-all duration-300 ease-in-out">
            Not Found
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-300 ease-in-out text-center leading-relaxed">
          Oops! The page you are looking for does not exist. <br className="hidden sm:block"/>
          Please check the URL or go back to the homepage.
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

export default NotFound;
