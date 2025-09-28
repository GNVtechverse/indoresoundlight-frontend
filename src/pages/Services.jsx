import React, { useRef } from 'react'
import HeroParallax from '../components/Services/HeroParallax'
import { useScroll } from 'motion/react';
import Accordion from "../components/Services/Accordion";

const Services = () => {
const container = useRef(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start start", "end end"]
});

  return (
    <>
    <div ref={container} className='bg-black/90 relative h-full '>
      <HeroParallax scrollYProgress={scrollYProgress}/>
      <div className="h-screen bg-white relative text-6xl text-amber-400">
      <Accordion/>

      </div>
    </div>
    </>
  )
} 

export default Services