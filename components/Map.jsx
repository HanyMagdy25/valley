import React from "react";

const Map = () => {
  return (
    <div
      className="map relative w-full h-[380px] overflow-hidden 
         before:w-full before:h-2/6 before:absolute
        before:top-0 before:left-0 before:bg-gradient-to-t 
        before:from-transparent before:to-white before:z-10"
    >
      <iframe
        className="opacity-80 "
        src="https://my.atlist.com/map/abb23693-5f74-4906-8279-fe47dec46456?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        width="100%"
        height="400px"
        // frameBorder="0"
        // scrolling="no"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Valley"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
