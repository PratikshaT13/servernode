import React from 'react';
import BusEstimationList from './BusEstimationList'; // Import the BusEstimationList component
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const SampleBusEstimationData = () => {
  // Sample list of bus data
  const busDataList = [
    { timestamp: '0 Hr 30 Min', busNumber: '101' },
    { timestamp: '0 Hr 21 Min', busNumber: '102' },
    { timestamp: '0 Hr 14 Min', busNumber: '103' },
    // Add more bus data objects as needed
  ];

  const source='BVB Stop';
  const destination="New bus stand";

  return (
    <div>
        <div className="source-destination">
        <FaMapMarkerAlt className="icon" />
        <h2>Source: {source}</h2>
        <FaMapMarkerAlt className="icon" />
        <h2>Destination: {destination}</h2>
        </div>
      <h1>Bus Estimation List</h1>
      <BusEstimationList busDataList={busDataList} />
    </div>
  );
};

export default SampleBusEstimationData;
