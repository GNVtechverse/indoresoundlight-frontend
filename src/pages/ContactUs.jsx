import React from 'react';
import HeroCarousel from '../components/ContactUs/HeroCarousel';
import CardsGrid from '../components/ContactUs/CardsGrid';
import GetInTouch from '../components/ContactUs/GetInTouch';
import MapSection from '../components/ContactUs/MapSection';


const ContactUs = () => {

  const handleFormSubmit = async (data) => {
console.log("form submitted", data);
};

  return (
     <div>
      <HeroCarousel />
      <CardsGrid />
      <GetInTouch />
      <MapSection lat={22.748731405404012} lng={75.8988881126421} />
    </div>
  )
}

export default ContactUs