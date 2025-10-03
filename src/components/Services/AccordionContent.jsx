import React from "react";

const AccordionContent = ({ index }) => {
  // yaha har accordion ke liye custom content define karenge
  switch (index) {
    case 0:
      return (
        <>
          <div className="flex gap-4 items-center bg-gray-200 p-4 rounded">
            <img src="/images/sound1.jpg" className="w-1/3" />
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Complete Event Sound Setup</h3>
              <p>Concerts, Weddings, Corporate Shows</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-gray-200 p-4 rounded">
            <img src="/images/sound2.jpg" className="w-1/3" />
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">PA Systems Installation</h3>
              <p>High-quality audio for any event</p>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded">Wireless mic solutions and more...</div>
          <div className="bg-gray-200 p-4 rounded">Indoor & Outdoor Audio Solutions</div>
          {/* <div className="bg-gray-200 p-4 rounded">Surround Sound Setup for Special Events</div> */}
        </>
      );
    case 1:
      return (
        <>
          <div className="flex gap-4 items-center bg-gray-200 p-4 rounded">
            <img src="/images/light1.jpg" className="w-1/3" />
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Stage Lighting Design</h3>
              <p>Concert & Live Show Lighting Programming</p>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded">Wedding & Event Decorative Lighting</div>
          <div className="bg-gray-200 p-4 rounded">Corporate Event Lighting with Brand Colors</div>
        </>
      );
    case 2:
      return (
        <>
          <div className="bg-gray-200 p-4 rounded">LED Wall Installation & Operation</div>
          <div className="bg-gray-200 p-4 rounded">Projection Mapping & Visual Effects</div>
          <div className="bg-gray-200 p-4 rounded">Smoke, CO₂ & Cold Pyro Effects Management</div>
          <div className="bg-gray-200 p-4 rounded">Confetti & Stage Entry Effects</div>
          <div className="bg-gray-200 p-4 rounded">DJ & Artist Technical Rider Support</div>
          <div className="bg-gray-200 p-4 rounded">Complete On-site Technical Team Support</div>
        </>
      );
    default:
      return null;
  }
};

export default AccordionContent;
