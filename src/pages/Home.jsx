import { Link } from "react-router-dom";
import Video from "../components/Home/Video";
import InfiniteMarque from "../components/Home/InfiniteMarquee/InfiniteMarque";
import SubscribeSection from "../components/Home/Footer/SubscribeSection";
import WhatWeDo from "../components/Home/HorizontalScroll/WhatWeDo";
import VerticalStackSm from "../components/Home/HorizontalScroll/VerticalStackSm";
import HorizontalScroll from "../components/Home/HorizontalScroll/HorizontalScroll";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="h-full w-full">
      {/* Video Section */}
      <Video />

      {/* About Section */}
      <div className="mx-auto my-18 h-auto w-[90%] lg:w-[70%] flex flex-col sm:flex-col md:flex-row justify-center items-start gap-8">
        {/* About Tag Section */}
        <div className="about-tag flex flex-col gap-3 w-full md:w-[35%]">
          <h3 className="text-[#E31E24] text-2xl md:text-3xl lg:text-3xl font-semibold">
            ABOUT US
          </h3>
          <div className="text-3xl md:text-5xl lg:text-5xl font-light mb-2 leading-tight">
            <h2>From Beats to</h2>
            <h2>Brightness We Set</h2>
            <h2>the Stage</h2>
          </div>
          <Link
            className="w-full md:w-[50%] p-2 text-sm md:text-xl text-center rounded text-white font-bold bg-[#E31E24] hover:bg-black/80 hover:shadow-xl/50 transition-all duration-500 ease-in-out"
            to={"/aboutUs"}
          >
            Know More About Us
          </Link>
        </div>

        {/* About Text Section */}
        <div className="about-text py-6 flex items-start w-full md:w-1/2">
          <p className="font-semibold text-sm md:text-xl text-black/80 leading-relaxed">
            At Indore Sound & Light, our passionate and dedicated team is
            committed to delivering an unparalleled experience. We believe in
            building lasting relationships with our clients, ensuring comfort
            and confidence at every stage. With over 15+ years of expertise and
            a highly skilled technical team, we transform every occasion—big or
            small—into a spectacular success. For us, every event is as special
            as it is for you.
          </p>
        </div>
      </div>

      {/* What We Do + Scroll Section */}
      <div
        className={`relative bg-neutral-900 w-full ${
          isMobile ? "min-h-auto" : "min-h-[400vh]"
        }`}
      >
        <WhatWeDo isMobile={isMobile} />

        {isMobile ? (
          <VerticalStackSm isMobile={isMobile} />
        ) : (
          <HorizontalScroll />
        )}
      </div>

      {/* Contact Section */}
      <div className="w-full relative">
  <div className="relative w-full 
                  h-[40vh]  /* default mobile height */
                  md:h-[600px]  
                  lg:h-[800px]">
    <img
      className="w-full h-full object-cover"
      src="/HomeContact/HomeContact02-1.jpg"
      alt="Contact Section"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white text-center">
        HAVE ANY QUESTIONS?
      </h2>
      <Link
        to={"/contactUs"}
        className="mt-4 text-lg md:text-2xl lg:text-3xl text-white/50 font-medium relative
                   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                   after:transition-all after:duration-500 hover:after:w-full"
      >
        CONNECT WITH US →
      </Link>
    </div>
  </div>
</div>


      {/* Footer Sections */}
      <InfiniteMarque />
      <SubscribeSection />
    </div>
  );
};

export default Home;
