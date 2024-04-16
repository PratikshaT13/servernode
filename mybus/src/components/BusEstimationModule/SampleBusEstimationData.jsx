// // import React from 'react';
// // import BusEstimationList from './BusEstimationList'; // Import the BusEstimationList component
// // import './BusEstimationModule.css';
// // import { FaMapMarkerAlt } from "react-icons/fa";

// // const SampleBusEstimationData = () => {
// //   // Sample list of bus data
// //   const busDataList = [
// //     { timestamp: '0 Hr 30 Min', busNumber: '101',passNumber: '17/45'},
// //     { timestamp: '0 Hr 21 Min', busNumber: '102',passNumber: '26/45' },
// //     { timestamp: '0 Hr 14 Min', busNumber: '103',passNumber:'12/45'},
// //     { timestamp: '0 Hr 50 Min', busNumber: '104',passNumber: '19/45'},
// //     { timestamp: '0 Hr 11 Min', busNumber: '105',passNumber: '06/45' },
// //     { timestamp: '0 Hr 44 Min', busNumber: '106',passNumber:'44/45'},
// //     // Add more bus data objects as needed
// //   ];

// //   const source='BVB Stop';
// //   const destination="New bus stand";

// //   return (
// //     <div>
// //         <div className="source-destination">
// //         <FaMapMarkerAlt className="icon" />
// //         <h2>Source: {source}</h2>
// //         <FaMapMarkerAlt className="icon" />
// //         <h2>Destination: {destination}</h2>
// //         </div>
// //       <h1>Bus Estimation List</h1>
// //       <BusEstimationList busDataList={busDataList} />
// //     </div>
// //   );
// // };

// // export default SampleBusEstimationData;


// import React from 'react';
// import BusEstimationList from './BusEstimationList';
// import './BusEstimationModule.css';
// import { FaMapMarkerAlt } from "react-icons/fa";
// import BusGallery from './BusEstimationGalary'; 

// const SampleBusEstimationData = () => {
//   // Sample list of bus data
//   const busDataList = [
//     { timestamp: '0 Hr 14 Min', busNumber: '101', passNumber: '17/45' },
//     { timestamp: '0 Hr 21 Min', busNumber: '102', passNumber: '26/45' },
//     { timestamp: '0 Hr 30 Min', busNumber: '103', passNumber: '12/45' },
//     { timestamp: '0 Hr 44 Min', busNumber: '104', passNumber: '19/45' },
//     { timestamp: '0 Hr 51 Min', busNumber: '105', passNumber: '06/45' },
//     { timestamp: '0 Hr 56 Min', busNumber: '106', passNumber: '44/45' },
//   ];

//   const source = 'BVB Stop';
//   const destination = "New bus stand";

//   return (
//     <div>
//       <div className="source-destination">
//         <FaMapMarkerAlt className="icon" />
//         <h2>Source: {source}</h2>
//         <FaMapMarkerAlt className="icon" />
//         <h2>Destination: {destination}</h2>
//       </div>
//       <h1>Bus Estimation List</h1>
//       <BusGallery busDataList={busDataList} /> {/* Add the BusGallery component */}
      
//     </div>
//   );
// };

// export default SampleBusEstimationData;

import BusGallery from './BusEstimationGalary'; 

import React, { useState } from 'react';
import './BusEstimationModule.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import BusEstimationList from './BusEstimationList'; // Import the component to render bus estimation cards

const busDataList = [
  { timestamp: '0 Hr 14 Min', busNumber: '101', passNumber: '17/45' },
  { timestamp: '0 Hr 21 Min', busNumber: '102', passNumber: '26/45' },
  { timestamp: '0 Hr 30 Min', busNumber: '103', passNumber: '12/45' },
  { timestamp: '0 Hr 44 Min', busNumber: '104', passNumber: '19/45' },
  { timestamp: '0 Hr 51 Min', busNumber: '105', passNumber: '06/45' },
  { timestamp: '0 Hr 56 Min', busNumber: '106', passNumber: '44/45' },
];

const SampleBusEstimationData = () => {
  const [source, setSource] = useState('BVB Stop');
  const [destination, setDestination] = useState('New bus stand');
  const [passengers, setPassengers] = useState('');
  const [showEstimation, setShowEstimation] = useState(false); // State to toggle showing bus estimation cards

  const handleFindBus = () => {
    
    console.log('Finding buses from', source, 'to', destination, 'with', passengers, 'passengers');
    
    setShowEstimation(true);
  };

  return (
    <div className="bus-estimation-container ">
     <div className="source-destination" style={{textAlign:'center'}}>
      <div style={{ display: 'inline-block',fontWeight:'500' }}>Source:</div>
        <FaMapMarkerAlt className="icon" />
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{
            marginLeft: '5px',
            marginRight: '5px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >
          <option value="BVB Stop">BVB Stop</option>
          {/* Add other source options here */}
        </select>
      </div>
      <div>
        <div style={{ display: 'inline-block', marginLeft: '62px',fontWeight:'500',marginTop:'15px' }}>Destination:</div>
        <FaMapMarkerAlt className="icon" />
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{
            marginLeft: '10px',
            marginRight: '5px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >
          <option value="New bus stand">New bus stand</option>
          {/* Add other destination options here */}
        </select>
      </div>
      <div className="passengers-input" style={{ display: 'inline-block', marginLeft:'1px',marginTop:'5px'}}>
        <input
          type="number"
          placeholder="Number of passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          style={{
            justifyContent:'center',
            marginTop:'10px',
            marginLeft: '100px',
            marginRight: '0px',
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      <button onClick={handleFindBus} style={{ display: 'inline-block', marginLeft: '100px',marginTop:'10px',fontWeight:'500' }}>Find Bus</button>
      {showEstimation &&  <BusGallery busDataList={busDataList} /> } {/* Render the bus estimation cards if showEstimation is true */}
    </div>
  );
};

export default SampleBusEstimationData;


