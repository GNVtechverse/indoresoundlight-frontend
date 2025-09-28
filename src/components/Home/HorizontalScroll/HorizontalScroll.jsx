import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-62%"]);

  useGSAP(() => {
    gsap.from(".image-text", {
      x: -100,
      opacity: 0,
      stagger: 0.2,
    });
  });

  const events = [
    { title: "Brand Event", img: "/HomeEvents/Brand.webp" },
    { title: "Corporate Meet", img: "/HomeEvents/CorporateMeet.png" },
    { title: "Exhibition", img: "/HomeEvents/Exhibition.jpg" },
    { title: "Fashion Show", img: "/HomeEvents/Fashion.jpg" },
    { title: "Live Concerts", img: "/HomeEvents/LiveConserts.jpg" },
    { title: "Theme Party", img: "/HomeEvents/ThemeParty.jpeg" },
    { title: "Wedding Event", img: "/HomeEvents/Wedding.jpg" },
  ];

  return (
    <div ref={targetRef} className="carousel relative bg-neutral-900 h-[400vh]">
      <div className="contentContainer h-screen w-full sticky top-0 flex overflow-hidden items-center justify-start">
        <motion.div style={{ x }} className="images flex gap-[3vw] py-[4rem]">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="imageItem relative group"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                className="h-[50vh] min-w-[40rem] object-cover rounded-lg flex-none"
                src={event.img}
                alt={event.title}
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg transition-all duration-500 hover:inset-[0.5%] group-hover:bg-transparent"></div>
              <p className="image-text text-6xl text-white absolute bottom-5 left-5 z-10">
                {event.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
