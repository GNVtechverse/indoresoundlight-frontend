import { FaBuilding, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CardsFlex = () => {
  const cards = [
    {
      icon: FaBuilding,
      title: "Our Office",
      text: "Shop No. 5, 3rd Floor, Plot No. 53, Shree Jee Avanue, Scheme No53, Vijay Nagar, Indore, 452011",
      link: "https://goo.gl/maps/example",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      text: "+91 9111474449",
      link: "tel:+91 9111474449",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      text: "isl@indoresoundlight.in",
      link: "mailto:isl@indoresoundlight.in",
    },
  ];

  return (
    <div className="h-full w-full bg-neutral-900">
    <div className="container">
    <div className="w-full flex justify-center bg-neutral-900 p-10">
      <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 items-center justify-center w-full max-w-[1200px]">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6
                       w-full sm:w-60 min-h-[300px] sm:h-[60%] hover:scale-105 hover:bg-black transition-all duration-200 ease-linear"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Icon */}
              <card.icon className="w-12 h-12 mb-4 text-[#E31E24] transition-colors duration-200" />

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black/60 text-center group-hover:text-white transition-colors duration-200">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-sm sm:text-sm text-center group-hover:text-white transition-colors duration-200">
                {card.text}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default CardsFlex;
