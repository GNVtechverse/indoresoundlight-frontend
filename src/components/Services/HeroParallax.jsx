import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroParallax = () => {

 const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (

    <div ref={ref} className="relative h-screen w-full overflow-hidden">


    <div className="h-full relative ">
      <motion.img
        src="/Service/ServiseHero.jpg"
        alt="Parallax Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ y }}
      />

      <div className="absolute h-full w-full bg-black/70 flex justify-between items-center top-0 left-0 text-white ">
        <div className="w-[35%] flex items-center justify-end">
          <h1 className="text-8xl mb-12 scale-110 font-overcame-regular  cursor-poiter">
            Services
          </h1>
        </div>
        <div className="h-full pl-10 pb-40 font-semibold flex flex-col justify-end w-[60%]">
          <p className="w-[40%] font-light text-xl">
            At Indore Sound & Light, we deliver a wide range of premium
            services, from state-of-the-art sound and lighting solutions to
            complete event management. Explore below to see how we bring
            unforgettable experiences to concerts, weddings, corporate shows,
            and more, with unmatched quality and creativity.
          </p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default HeroParallax;
