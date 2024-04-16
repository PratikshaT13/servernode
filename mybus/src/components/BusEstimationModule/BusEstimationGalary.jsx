import React, { useRef, useState } from 'react';
import BusEstimationModule from './BusEstimationModule';
import './BusEstimationModule.css'; // Import the CSS file for the gallery
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const BusGallery = ({ busDataList }) => {
  const galleryRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  const scrollRight = () => {
    if (startIndex < busDataList.length - 3) {
      setStartIndex(startIndex + 3);
    }
  };

  return (
    <div className="bus-gallery-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        {<FaArrowAltCircleLeft/>} {/* Left arrow */}
      </button>
      <div className="bus-gallery" ref={galleryRef}>
        {busDataList.slice(startIndex, startIndex + 3).map((busData, index) => (
          <BusEstimationModule
            key={index}
            timestamp={busData.timestamp}
            busNumber={busData.busNumber}
            passNumber={busData.passNumber}
          />
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        {<FaArrowAltCircleRight/>} {/* Right arrow */}
      </button>
    </div>
  );
};

export default BusGallery;
