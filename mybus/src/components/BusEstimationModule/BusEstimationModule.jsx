import React from 'react';
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import './BusEstimationList';
//import Lottie from 'lottie-web';
import Lottie from 'react-lottie';
import animationData from '../assets/ani1.json';

// const BusEstimationModule = ({ source, destination, timestamp, busNumber }) => {
//   return (
//     <div className="bus-estimation-container">
      
//       <div className="bus-details">
//         <div className="card">
//           <div className="timestamp">
//             <h3><IoTimeOutline className='icon'/>{timestamp}</h3>
//           </div>
//           <div className="bus-number">
//             <h3>Bus Number: {busNumber}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const BusEstimationModule = ({ source, destination, timestamp, busNumber,passNumber}) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      <div className="bus-estimation-container">
    
        <div className="bus-details">
          <div className="card">
            <div className="timestamp">
              <h3><IoTimeOutline className='icon'/>{timestamp}</h3>
            </div>
            <div className="ani1">
              <Lottie options={defaultOptions} height={150} width={150} />
            </div>
            <div className="bus-number">
              <h3>Bus Number: {busNumber}</h3>
            </div>
            <div className="bus-number">
              <h3>Available Seats: {passNumber}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default BusEstimationModule;
