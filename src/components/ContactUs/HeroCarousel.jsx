import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroCarousel = () => {
  const ref = useRef(null);

  // Scroll progress reference
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start aur end points set
  });

  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Scale effect (slight zoom in while scrolling)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[80vh] sm:h-[90vh] lg:h-[100vh] overflow-hidden m-0 p-0"
    >
      {/* Background Image with Parallax + Scale */}
      <motion.img
        src="/ContactUs/ContactUsHero02.jpg"
        alt="Hero"
        style={{ y, scale }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/40 text-white px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Contact <span className="text-[#E31E24]">Us</span>
        </h1>

        <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
          ......
        </div>

        <div className="space-y-2 sm:space-y-3 md:space-y-4 font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
          <h2>Need an expert? You are more than welcomed</h2>
          <h2>to leave your contact info and we’ll be in touch shortly.</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
