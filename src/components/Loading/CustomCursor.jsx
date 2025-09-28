import { Children, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createPortal } from "react-dom";

const CustomCursor = ({children}) => {
  const cursorRef = useRef(null);

  const [mousePosition,setMousePosition] = useState({
    x: 0,
    y: 0
  });

 
  useGSAP(()=>{
    const mouseMove = (e) => {
  setMousePosition({
    x: e.clientX,
    y:e.clientY
  });
 };
    window.addEventListener("mousemove", mouseMove);

    gsap.to(".cursor", {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 0.2,
        ease:"bounce.out"
    })
  }, [mousePosition]);
    

  return createPortal(
    <div
      className="cursor fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none bg-black z-[9999]"
    />,
    document.body // 👈 Direct body me mount ho raha hai
  );
};

export default CustomCursor;
