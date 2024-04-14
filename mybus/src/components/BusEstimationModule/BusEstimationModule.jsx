import React from 'react';
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import './BusEstimationList';

const BusEstimationModule = ({ source, destination, timestamp, busNumber }) => {
  return (
    <div className="bus-estimation-container">
      
      <div className="bus-details">
        <div className="card">
          <div className="timestamp">
            <h3><IoTimeOutline className='icon'/>{timestamp}</h3>
          </div>
          <div className="bus-number">
            <h3>Bus Number: {busNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

  
export default BusEstimationModule;
