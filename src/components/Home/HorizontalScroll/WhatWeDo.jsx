import React from "react";

const WhatWeDo = ({ isMobile }) => {
  return (
   <div className={`w-full flex flex-col items-center justify-center text-center px-6 text-white transition-all duration-300 ${!isMobile ? 'absolute top-[5%] z-20' : 'relative top-0 py-10'}`}>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
        <span className="text-[#E31E24]">What</span> We Do
      </h2>
      <p className="text-white/50 hover:text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
        From small brand launches to grand weddings, fashion shows, and live
        concerts, we create experiences that people never forget. With powerful
        sound systems, creative lighting setups, and smooth visual storytelling,
        every event is designed to engage, inspire, and amaze. At ISL, we blend
        creativity with advanced technology to turn any venue into a vibrant
        stage where every moment shines and every detail matters. Whether it’s a
        corporate meet, cultural fest, or high-energy concert, our team ensures
        the perfect mix of clarity, energy, and atmosphere that keeps
        audiences connected.
      </p>
    </div>
  );
};

export default WhatWeDo;
