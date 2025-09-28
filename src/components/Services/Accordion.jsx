import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react"; // 🔹 yaha import change kiya

const accordionData = [
  {
    title: "🎶 Sound Services",
    content: [
      "Complete Event Sound Setup (Concerts, Weddings, Corporate Shows)",
      "PA (Public Address) Systems Installation",
      "Indoor & Outdoor Audio Solutions",
      "Live Band & DJ Sound Engineering",
      "Conference & Seminar Audio Support",
      "Wireless Mic Solutions for Stage & Anchoring",
      "Surround Sound Setup for Special Events",
    ],
  },
  {
    title: "💡 Lighting Services",
    content: [
      "Stage Lighting Design & Setup",
      "Concert & Live Show Lighting Programming",
      "Wedding & Event Decorative Lighting",
      "Corporate Event Lighting (Brand Colors / Themes)",
      "Truss & Rigging Installation",
      "Laser & Special Effect Lighting Shows",
      "Ambient & Mood Lighting Setup",
    ],
  },
  {
    title: "✨ Special Event Services",
    content: [
      "LED Wall Installation & Operation",
      "Projection Mapping & Visual Effects",
      "Smoke, CO₂ & Cold Pyro Effects Management",
      "Confetti & Stage Entry Effects",
      "DJ & Artist Technical Rider Support",
      "Complete On-site Technical Team Support",
    ],
  },
];

const FullPageAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 flex flex-col">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-gray-300">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex items-center justify-between px-8 py-8 text-3xl font-bold transition-colors duration-300 ${
                isOpen
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-900 hover:bg-gray-50"
              }`}
            >
              {/* Left side: Icon + Title */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveRight size={32} /> {/* 🔹 Icon replaced here */}
                </motion.div>
                <span>{item.title}</span>
              </div>

              {/* Right side: Number */}
              <motion.div
                animate={{ scale: isOpen ? 1.3 : 1 }}
                transition={{ duration: 0.3 }}
                className={`text-xl font-bold ${
                  isOpen ? "text-white" : "text-neutral-900"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "80vh", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`overflow-hidden flex items-start justify-center px-10 py-12 transition-colors duration-300 ${
                    isOpen
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900"
                  }`}
                >
                  <div className="max-w-3xl text-2xl font-semibold leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      {item.content.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FullPageAccordion;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// export const accordionData = [
//   {
//     title: "🎶 Sound Services",
//     content: `
// - Complete Event Sound Setup (Concerts, Weddings, Corporate Shows)
// - PA (Public Address) Systems Installation
// - Indoor & Outdoor Audio Solutions
// - Live Band & DJ Sound Engineering
// - Conference & Seminar Audio Support
// - Wireless Mic Solutions for Stage & Anchoring
// - Surround Sound Setup for Special Events
//     `,
//   },
//   {
//     title: "💡 Lighting Services",
//     content: `
// - Stage Lighting Design & Setup
// - Concert & Live Show Lighting Programming
// - Wedding & Event Decorative Lighting
// - Corporate Event Lighting (Brand Colors / Themes)
// - Truss & Rigging Installation
// - Laser & Special Effect Lighting Shows
// - Ambient & Mood Lighting Setup
//     `,
//   },
//   {
//     title: "✨ Special Event Services",
//     content: `
// - LED Wall Installation & Operation
// - Projection Mapping & Visual Effects
// - Smoke, CO₂ & Cold Pyro Effects Management
// - Confetti & Stage Entry Effects
// - DJ & Artist Technical Rider Support
// - Complete On-site Technical Team Support
//     `,
//   },
// ];





// const Accordion = () => {
//    const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col">
//       {accordionData.map((item, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div key={index} className="border-b border-gray-300">
//             {/* Accordion Header */}
//             <button
//               onClick={() => toggleAccordion(index)}
//               className={`w-full flex items-center justify-between px-8 py-8 text-3xl font-bold transition-colors duration-300 ${
//                 isOpen
//                   ? "bg-gray-900 text-white"
//                   : "bg-white text-gray-900 hover:bg-gray-50"
//               }`}
//             >
//               <div className="flex items-center gap-4">
//                 <motion.div
//                   animate={{ rotate: isOpen ? 90 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronRight size={32} />
//                 </motion.div>
//                 <span>{item.title}</span>
//               </div>

//               <motion.div
//                 animate={{ scale: isOpen ? 1.3 : 1 }}
//                 transition={{ duration: 0.3 }}
//                 className={`text-xl font-bold ${
//                   isOpen ? "text-white" : "text-gray-500"
//                 }`}
//               >
//                 {String(index + 1).padStart(2, "0")}
//               </motion.div>
//             </button>

//             {/* Accordion Content */}
//             <AnimatePresence initial={false}>
//               {isOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "200vh", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   className={`overflow-hidden flex items-center justify-center px-10 py-12 transition-colors duration-300 ${
//                     isOpen
//                       ? "bg-gray-900 text-white"
//                       : "bg-gray-100 text-gray-900"
//                   }`}
//                 >
//                   <div className="max-w-3xl text-lg leading-relaxed">
//                     {item.content}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Accordion