const MapSection = ({ lat, lng }) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const mapsLink = `https://www.google.com/maps?q=${lat},${lng}&z=15`;

  return (
    <div className="w-full h-[500px] relative">
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="border-0"
      ></iframe>
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-15 bg-neutral-900 text-white py-2 px-4 rounded shadow"
      >
        Get Directions
      </a>
    </div>
  );
};

export default MapSection;
``