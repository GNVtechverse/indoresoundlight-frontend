import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const pageRaf = useRef(null);

  const [stairCount, setStairCount] = useState(7); // default 7 (for desktop)

  // 👉 Resize logic for responsive divs
  useEffect(() => {
    const updateStairs = () => {
      if (window.innerWidth < 640) {
        setStairCount(3); // Mobile
      } else if (window.innerWidth < 1024) {
        setStairCount(5); // Laptop
      } else {
        setStairCount(7); // Desktop / Large
      }
    };

    updateStairs(); // Run on mount
    window.addEventListener("resize", updateStairs);
    return () => window.removeEventListener("resize", updateStairs);
  }, []);

  useGSAP(
    function () {
      var tl = gsap.timeline({
        onComplete: () => {
          hasAnimatedRef.current = true;
        },
      });

      tl.to(stairParentRef.current, { display: "block" });

      tl.from(".stair", {
        height: 0,
        stagger: { amount: -0.25 },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: { amount: -0.25 },
      });

      tl.to(stairParentRef.current, { display: "none" });

      tl.to(".stair", { y: "0%" });

      gsap.from(pageRaf.current, {
        opacity: 0,
        delay: 1.2,
        scale: 1.2,
      });

      if (!hasAnimatedRef.current) {
        tl.from(
          ".navbar",
          {
            y: -50,
            opacity: 0,
            duration: 0.35,
            stagger: -0.2,
          },
          "-=0.6"
        );

        tl.from(
          ".hero-text",
          {
            x: -500,
            opacity: 0,
            duration: 0.8,
            stagger: 0.4,
          },
          "-=0.3"
        );
      }
    },
    [currentPath]
  );

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-50 top-0">
        <div className="loading h-screen w-full flex fixed z-50 top-0">
          {Array.from({ length: stairCount }).map((_, i) => (
            <div
              key={i}
              className={`stair h-full flex-1 bg-black`}
              style={{ flexBasis: `${100 / stairCount}%` }}
            ></div>
          ))}
        </div>
      </div>
      <div ref={pageRaf}>{props.children}</div>
    </div>
  );
};

export default Stairs;





// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useLocation } from "react-router-dom";
// import { div } from "motion/react-client";

// const Stairs = (props) => {
//   const currentPath = useLocation().pathname;

//   const stairParentRef = useRef(null);
//   const hasAnimatedRef = useRef(false); // Track if nav/hero animation already ran
//   const pageRaf = useRef(null);

//   useGSAP(
//     function () {
//       var tl = gsap.timeline({
//         onComplete: () => {
//           hasAnimatedRef.current = true; // mark as done AFTER animation fully runs
//         },
//       });

//       // {* Loading Animation *}
//       tl.to(stairParentRef.current, {
//         display: "block",
//       });

//       tl.from(".stair", {
//         height: 0,
//         stagger: {
//           amount: -0.25,
//         },
//       });

//       tl.to(".stair", {
//         y: "100%",
//         stagger: {
//           amount: -0.25,
//         },
//       });

//       tl.to(stairParentRef.current, {
//         display: "none",
//       });

//       tl.to(".stair", {
//         y: "0%",
//       });

//       //   {* App Animation *}
//        gsap.from(pageRaf.current, {
//          opacity: 0,
//          delay: 1.2,
//          scale: 1.2,
//        });

//       // {* NavBar Animation *}
//       if (!hasAnimatedRef.current) {
//         tl.from(
//           ".navbar",
//           {
//             y: -50,
//             opacity: 0,
//             duration: 0.35,
//             stagger: -0.2,
//           },
//           "-=0.6"
//         ); // overlap: starts 0.6s before stairs end

//         // {* HeroText Animation *}
//         tl.from(
//           ".hero-text",
//           {
//             x: -500,
//             opacity: 0,
//             duration: 0.8,
//             stagger: 0.4,
//           },
//           "-=0.3"
//         ); //  overlap with navbar
//       }
//     },
//     [currentPath]
//   );

//   return (
//     <div>
//       <div ref={stairParentRef} className="h-screen w-full fixed z-50 top-0">
//         <div className="loading h-screen w-full flex fixed z-50 top-0">
//           <div className="stair h-full basis-1/7 bg-black"></div>
//           <div className="stair h-full basis-1/7 bg-black"></div>
//           <div className="stair h-full basis-1/7 bg-black"></div>
//           <div className="stair h-full basis-1/7 bg-black"></div>
//           <div className="stair h-full basis-1/7 bg-black"></div>
//           <div className="stair h-full basis-1/7 bg-black"></div>
//           <div className="stair h-full basis-1/7 bg-black"></div>
//         </div>
//       </div>
//       <div ref={pageRaf}>{props.children}</div>
//     </div>
//   );
// };

// export default Stairs;
