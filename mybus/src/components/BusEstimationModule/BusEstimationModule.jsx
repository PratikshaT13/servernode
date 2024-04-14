import React from 'react';
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import './BusEstimationList';

const BusEstimationModule = ({ source, destination, timestamp, busNumber }) => {
  return (
    <div className="bus-estimation-container">
     
      <div className="card">
        <div className="card-content">
          <div className="timestamp">
            <h3>Timestamp: {timestamp}</h3>
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
