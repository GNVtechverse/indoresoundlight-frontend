import React from "react";
import "../InfiniteMarquee/infinite-marquee.css";

const InfiniteMarque = () => {
 const logos = [
   "/HomeLogo/Mp.jpg",
   "/HomeLogo/SBI.jpg",
   "/HomeLogo/NID.jpg",
   "/HomeLogo/AXIS-Bank.jpg",
  "/HomeLogo/Bank-Of-Maharastra.jpg",
  "/HomeLogo/CII.jpg",
  "/HomeLogo/CIPLA.jpg",
  "/HomeLogo/Dabur.jpg",
  "/HomeLogo/DNA.jpg",
  "/HomeLogo/HDFC.jpg",
  "/HomeLogo/SBI-General-Insurance.jpg",
  "/HomeLogo/Lenskart.jpg",
  "/HomeLogo/Samsung.jpg",
  "/HomeLogo/SBI-Life.jpg",
  "/HomeLogo/Seventy-Seven.jpg",
  "/HomeLogo/Ultratech.jpg",
];



 const brandNames = [
  "MP",
  "SBI",
  "National Institute of Design",
  "Axis Bank",
  "Bank of Maharashtra",
  "Confederation of Indian Industry",
  "Cipla",
  "Dabur",
  "DNA Nwrworks",
  "HDFC Life",
  "SBI General Insurance",
  "Lenskart",
  "Samsung",
  "SBI Life",
  "Seventy Seven",
  "Ultra Tech Cement",
];

  return (
    <div className="w-full py-10">
      <div className="space-y-10 lg:space-y-12">
        {/* Logos Marquee */}
        <div className="marquee">
          <div className="marquee-inner flex justify-center lg:justify-start">
            {logos.concat(logos).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`logo-${i}`}
                className="h-16 lg:h-16 md:h-14 sm:h-12 mx-4 lg:mx-8 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Brand Names Marquee */}
        <div className="marquee">
          <div className="marquee-inner flex justify-center lg:justify-start">
            {brandNames.concat(brandNames).map((name, i) => (
              <span
                key={i}
                className="mx-4 lg:mx-8 text-xl lg:text-2xl font-bold whitespace-nowrap md:text-lg sm:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarque;
