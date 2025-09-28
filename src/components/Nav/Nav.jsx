import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Nav = () => {
  const navRef = useRef(null);
  const sliderRef = useRef(null);
  const tl = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger line refs
  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(sliderRef.current, {
      top: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    tl.current.from(".nav-slider01", {
      x: 30,
      duration: 0.2,
      stagger: 0.1,
      opacity: 0,
    });
  });

  const toggleMenu = () => {
    if (!isOpen) {
      tl.current.play();
      animateToX();
    } else {
      tl.current.reverse();
      animateToHamburger();
    }
    setIsOpen(!isOpen);
  };

  // GSAP animation for Hamburger → X
  const animateToX = () => {
    gsap.to(topLine.current, {
      rotate: 45,
      y: "14px",
      duration: 0.3,
    });
    gsap.to(middleLine.current, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(bottomLine.current, {
      rotate: -45,
      y: "-16px",
      duration: 0.3,
    });
  };

  const animateToHamburger = () => {
    gsap.to(topLine.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
    });
    gsap.to(middleLine.current, {
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(bottomLine.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (isOpen) {
      tl.current.reverse();
      animateToHamburger();
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Nav Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="
            nav-slider 
            bg-black/40 
            flex justify-end 
            w-full 
            fixed top-[-66vh] left-0 
            backdrop-blur-xl 
            z-50
            h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[66vh] 
          "
        >
          {/* Links Container */}
          <div
            className="
              h-full w-full sm:w-2/3 lg:w-1/3 
              text-white flex flex-col 
              justify-center 
              items-center sm:items-center lg:items-end 
              px-4 sm:px-6 lg:px-12 
              gap-3 sm:gap-4 md:gap-5 lg:gap-6
              text-2xl sm:text-2xl md:text-3xl lg:text-4xl
            "
          >
            <Link onClick={handleLinkClick} className="nav-slider01 hover:text-[#E31E24] transition-colors duration-300 ease-in-out" to={"/"}>Home</Link>
            <Link onClick={handleLinkClick} className="nav-slider01 hover:text-[#E31E24] transition-colors duration-300 ease-in-out" to={"/aboutUs"}>AboutUs</Link>
            <Link onClick={handleLinkClick} className="nav-slider01 hover:text-[#E31E24] transition-colors duration-300 ease-in-out" to={"/services"}>Services</Link>
            <Link onClick={handleLinkClick} className="nav-slider01 hover:text-[#E31E24] transition-colors duration-300 ease-in-out" to={"/equipments"}>Equipments</Link>
            <Link onClick={handleLinkClick} className="nav-slider01 hover:text-[#E31E24] transition-colors duration-300 ease-in-out" to={"/events"}>Events</Link>
            <Link onClick={handleLinkClick} className="nav-slider01 hover:text-[#E31E24] transition-colors duration-300 ease-in-out" to={"/contactUs"}>ContactUs</Link>

            {/* Social Icons */}
            <div className="hidden lg:flex absolute bottom-9 right-12 space-x-6 text-2xl">
              <a href="https://www.instagram.com/indoresoundlight" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61572681741669" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300"><FaFacebookF /></a>
              <a href="https://wa.me/9826729589" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors duration-300"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <nav
        ref={navRef}
        className="
          w-full 
          h-16 sm:h-20 md:h-24 lg:h-28 
          px-4 sm:px-6 md:px-10 lg:px-12
          flex items-center justify-between 
          transition-all duration-700 ease-in-out 
          z-50 fixed top-0
        "
      >
        {/* Logo */}
<div className="navbar flex items-center">
  <img
    src="/Logo/ISL_White_Logo.svg"
    alt="Logo"
    className="
      h-12 sm:h-14 md:h-16 lg:h-20 
      w-auto object-contain transition-all duration-300
    "
  />
</div>

        {/* Custom Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center gap-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        >
          <span ref={topLine} className="block h-[3px] w-8 sm:w-10 md:w-11 lg:w-12 bg-white rounded"></span>
          <span ref={middleLine} className="block h-[3px] w-8 sm:w-10 md:w-11 lg:w-12 bg-white rounded"></span>
          <span ref={bottomLine} className="block h-[3px] w-8 sm:w-10 md:w-11 lg:w-12 bg-white rounded"></span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
