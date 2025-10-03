import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";
import AccordionContent from "./AccordionContent"; // 🔹 Import

const accordionData = [
  { title: "🎶 Sound Services" },
  { title: "💡 Lighting Services" },
  { title: "✨ Special Event Services" },
];

const Accordion = ({ setParentHeight }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    if (setParentHeight) {
      const totalHeight = contentRefs.current.reduce((acc, ref, idx) => {
        if (ref) {
          const headerHeight = 96;
          const contentHeight = openIndex === idx ? ref.scrollHeight + 24 : 0;
          return acc + headerHeight + contentHeight;
        }
        return acc;
      }, 0);
      setParentHeight(totalHeight);
    }
  }, [openIndex, setParentHeight]);

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex cursor-pointer flex-col items-center"
            >
              <div className="h-28 w-[80%] flex items-center gap-4 px-6 py-8">
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                  <MoveRight size={45} />
                </motion.div>
                <span className="text-5xl font-bold">{item.title}</span>
                <motion.div
                  animate={{ scale: isOpen ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold ml-auto"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </div>
            </button>

            {/* Custom Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: contentRefs.current[index]?.scrollHeight || "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.645, 0.045, 0.355, 1] }}
                  className="overflow-hidden w-full px-10"
                >
                  <div ref={(el) => (contentRefs.current[index] = el)} className="py-6 max-w-4xl mx-auto flex flex-col gap-6">
                    <AccordionContent index={index} /> {/* 🔹 Dynamic content */}
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

export default Accordion;








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
