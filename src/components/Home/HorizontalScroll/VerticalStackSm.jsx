import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VerticalStackSm = ({ isMobile }) => {
  const containerRef = useRef(null);

  const events = [
    { title: "Brand Event", img: "/HomeEvents/Brand.webp" },
    { title: "Corporate Meet", img: "/HomeEvents/CorporateMeet.png" },
    { title: "Exhibition", img: "/HomeEvents/Exhibition.jpg" },
    { title: "Fashion Show", img: "/HomeEvents/Fashion.jpg" },
    { title: "Live Concerts", img: "/HomeEvents/LiveConserts.jpg" },
    { title: "Theme Party", img: "/HomeEvents/ThemeParty.jpeg" },
    { title: "Wedding Event", img: "/HomeEvents/Wedding.jpg" },
  ];

  useEffect(() => {
  const cards = gsap.utils.toArray(".sm-card");

  cards.forEach((card, i) => {
    gsap.fromTo(
      card,
      { x: i % 2 === 0 ? -150 : 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          // markers: true, // debug ke liye
        },
      }
    );
  });
}, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col overflow-x-hidden gap-8 px-4 py-10 ${
        isMobile ? "min-h-auto" : "min-h-[400vh]"
      } bg-neutral-900`}
    >
      {events.map((event, index) => (
        <div
          key={index}
          className="sm-card relative mx-auto w-full max-w-md bg-black/20 rounded-lg overflow-hidden"
        >
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-72 md:h-64 object-cover rounded-lg"
          />
          <p className="absolute bottom-3 left-3 text-xl text-white font-semibold">
            {event.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VerticalStackSm;
