import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error(`❌ Please enter a valid email!`, {
        position: "bottom-right",
        theme: "light",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        containerId: "subscribe-container"
      });
      return;
    }
    // Success toast
    toast.success(`${email} Your email submited successfully!`, {
      position: "bottom-right",
      theme: "light",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      containerId: "subscribe-container"
    });
    console.log("Submitted Email:", email);
    setEmail(""); // input reset
  };

  return (
    <>
      {/* Toast Container - Fixed to viewport */}
      <ToastContainer
        containerId="subscribe-container"
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          width: 'auto'
        }}
      />
      
      <div className="relative w-full">
        {/* Background Image */}
        <div className="w-full h-[35vh] md:h-[30vh] sm:h-[50vh] relative overflow-hidden">
          
          <img
            className="w-full h-full object-cover"
            src="/HomeContact/HomeContact01.jpg"
            alt="Background"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-6 md:py-8 sm:py-4 gap-6 sm:gap-2 z-10">
            
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-4">
              {/* Left Text */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-white mb-2">
                  <span className="text-[#E31E24]">Stay</span> in the Loop
                </h3>
                <p className="text-xl md:text-lg sm:text-base font-semibold text-white">
                  Get the latest event updates, trends & news from ISL.
                </p>
              </div>
              {/* Right Input + Button */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full md:w-auto mt-4 md:mt-0"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-3 w-full sm:w-[250px] md:w-[300px] rounded-md focus:outline-none bg-white text-neutral-900 placeholder-neutral-900"
                />
                <button
                  type="submit"
                  className="bg-[#E31E24] hover:bg-red-700 px-6 py-3 rounded-md text-white font-medium w-full sm:w-auto md:w-auto transition-all duration-500 ease-in-out"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeSection;