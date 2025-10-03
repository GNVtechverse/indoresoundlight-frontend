import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Equipments from "./pages/Equipments";
import Events from "./pages/Events";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Footer from "./components/Home/Footer/Footer";
import CustomCursor from "./components/Loading/CustomCursor";
import SmoothScroll from "./components/Loading/SmoothScrolling";
import UnderMaintenence from "./pages/UnderMaintenence";






function App() {

  
  

  return (
    <>
    <SmoothScroll />
      <div id="smooth-content" className=" relative min-h-screen w-full">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
          <Route path="/aboutUs" element={<UnderMaintenence />} />

           {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/services" element={<UnderMaintenence />} />
          
          {/* <Route path="/equipments" element={<Equipments />} /> */}
          <Route path="/equipments" element={<UnderMaintenence />} />
          
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/events" element={<UnderMaintenence />} />
          
          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
      {/* <CustomCursor/> */}
    </>
  );
}

export default App;
