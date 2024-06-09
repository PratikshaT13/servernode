import './BusEstimationModule.css';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
//import Lottie from 'lottie-web';
import Lottie from 'react-lottie';
import animationData from '../assets/ani1.json';



const BusEstimationModule = ({ source, destination, timestamp, busNumber, passNumber }) => {
  const [busData, setBusData] = useState({
    timestamp,
    busNumber,
    passNumber
  });
  const [animationClass, setAnimationClass] = useState('fade-in');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    // Trigger fade-out animation
    setAnimationClass('fade-out');

    // Set a timeout to update the data and trigger fade-in animation
    const timeoutId = setTimeout(() => {
      setBusData({ timestamp, busNumber, passNumber });
      setAnimationClass('fade-in');
    }, 500); // This should match the duration of your fade-out animation

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [timestamp, busNumber, passNumber]);

  return (
    <div className={`bus-estimation-container ${animationClass}`}>
      <div className="bus-details">
        <div className="card">
          <div className="timestamp">
            <h3><IoTimeOutline className='icon' />{busData.timestamp}</h3>
          </div>
          <div className="ani1">
            <Lottie options={defaultOptions} height={150} width={150} isClickToPauseDisabled={true} />
          </div>
          <div className="bus-number">
            <h3>Bus Number: {busData.busNumber}</h3>
          </div>
          <div className="bus-number">
            <h3>Available Seats: {busData.passNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BusEstimationModule;