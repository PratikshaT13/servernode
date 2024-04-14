import React from 'react';
import BusEstimationList from './BusEstimationList'; // Import the BusEstimationList component
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const SampleBusEstimationData = () => {
  // Sample list of bus data
  const busDataList = [
    { timestamp: '10:00 AM', busNumber: '101' },
    { timestamp: '11:30 AM', busNumber: '102' },
    { timestamp: '12:45 PM', busNumber: '103' },
    // Add more bus data objects as needed
  ];

  const source='BVB Stop';
  const destination="New bus stand";

  return (
    <div>
         <div className="source-destination">
        <h2>Source: {source}</h2>
        <FaMapMarkerAlt className="icon" />
        <h2>Destination: {destination}</h2>
        </div>
      <h1>Bus Estimation List</h1>
      <BusEstimationList busDataList={busDataList} /> {/* Pass the sample bus data list as prop */}
    </div>
  );
};

export default SampleBusEstimationData;
