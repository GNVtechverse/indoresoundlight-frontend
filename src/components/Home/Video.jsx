import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full relative">
        {/* 🎥 Background Video */}
        <video
          className="h-[100dvh] sm:h-screen w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/Hero/ISL_Video02.mov"
        />

        {/* 📝 Overlay Text (hide on mobile, show on tab & laptop) */}
        <div className="hero-section hidden sm:flex mb-10 ml-10 w-6xl font-light text-8xl absolute inset-0 flex-col justify-end text-white z-10">
          <div className="hero-text font-overcame-regular drop-shadow-lg ">
            Transforming
          </div>
          <div className="hero-text font-overcame-regular ml-12 text-center drop-shadow-lg">
            <span className="font-overcame-regular">Spaces</span>
            <span className="font-overcame-outline"> with Sound</span>
          </div>
          <div className="hero-text text-center drop-shadow-lg">
            <span className="font-overcame-outline">And Light</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
