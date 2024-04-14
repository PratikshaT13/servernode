import React from 'react';
import BusEstimationList from './BusEstimationList'; // Import the BusEstimationList component
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const SampleBusEstimationData = () => {
  // Sample list of bus data
  const busDataList = [
    { timestamp: '0 Hr 30 Min', busNumber: '101',passNumber: '17/45'},
    { timestamp: '0 Hr 21 Min', busNumber: '102',passNumber: '26/45' },
    { timestamp: '0 Hr 14 Min', busNumber: '103',passNumber:'12/45'},
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
