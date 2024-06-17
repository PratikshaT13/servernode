// import BusGallery from './BusEstimationGalary'; 

// import React, { useState } from 'react';
// import './BusEstimationModule.css';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import authService from '../../services/LoginService';




// const SampleBusEstimationData = () => {
//   const [source, setSource] = useState('BVB Stop');
//   const [destination, setDestination] = useState('New bus stand');
//   const [passengers, setPassengers] = useState('');
//   const [error, setError] = useState(null);
//   const [showEstimation, setShowEstimation] = useState(false); // State to toggle showing bus estimation cards
//   const [busDataList, setBusDataList] = useState([]);

//   const handleFindBus = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//         console.log('Finding buses from', source, 'to', destination, 'with', passengers, 'passengers');
//         const data = await authService.busListS(source, destination, passengers)
//         console.log('Login successful:', data);
//         if (true) {  // Adjust this condition based on your API's response
//           setBusDataList(data)
//           setShowEstimation(true);
//         } else {
//             setError('Login failed. Please check your username and password.');
//         }
//     } catch (error) {
//         setError('Login failed here. Please check your username and password.');
//     }
    
// };

//   return (
//     <div className="bus-estimation-container ">
//      <div className="source-destination" style={{textAlign:'center'}}>
//       <div style={{ display: 'inline-block',fontWeight:'500' }}>Source:</div>
//         <FaMapMarkerAlt className="icon" />
//         <select
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           style={{
//             marginLeft: '5px',
//             marginRight: '5px',
//             padding: '5px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         >
//           <option value="BVB Stop">BVB Stop</option>
//           {/* Add other source options here */}
//         </select>
//       </div>
//       <div>
//         <div style={{ display: 'inline-block', marginLeft: '62px',fontWeight:'500',marginTop:'15px' }}>Destination:</div>
//         <FaMapMarkerAlt className="icon" />
//         <select
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           style={{
//             marginLeft: '10px',
//             marginRight: '5px',
//             padding: '5px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         >
//           <option value="New bus stand">New bus stand</option>
//           {/* Add other destination options here */}
//         </select>
//       </div>
//       <div className="passengers-input" style={{ display: 'inline-block', marginLeft:'1px',marginTop:'5px'}}>
//         <input
//           type="number"
//           placeholder="Number of passengers"
//           value={passengers}
//           onChange={(e) => setPassengers(e.target.value)}
//           style={{
//             justifyContent:'center',
//             marginTop:'10px',
//             marginLeft: '100px',
//             marginRight: '0px',
//             padding: '5px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>
//       <button onClick={handleFindBus} style={{ display: 'inline-block', marginLeft: '100px',marginTop:'10px',fontWeight:'500' }}>Find Bus</button>
//       {showEstimation &&  <BusGallery busDataList={busDataList} /> } {/* Render the bus estimation cards if showEstimation is true */}
//     </div>
//   );
// };

// export default SampleBusEstimationData;



import FleetGallery from './FleetEstimationGalary'; 

import React, { useState } from 'react';
import './FleetEstimationModule.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import authService from '../../services/LoginService';




const SampleFleetEstimationData = () => {
  const [error, setError] = useState(null);
  const [showEstimation, setShowEstimation] = useState(false); // State to toggle showing bus estimation cards
  
  const busDataList = [
    { fuelLevel: '12.5L', licensePlate: 'KA25MN7865', status: 'Good' },
    { fuelLevel: '56.2L', licensePlate: 'KA25PN9065', status: 'Moderate' },
    { fuelLevel: '10.2L', licensePlate: 'KA25FR7985', status: 'Good' },
    { fuelLevel: '68.4L', licensePlate: 'KA25LO6765', status: 'Bad' },
    { fuelLevel: '68.4L', licensePlate: 'KA25UO5565', status: 'Bad' },
  
  ];

  const handleFindBus = async (e) => {
    e.preventDefault();
    setError(null);

    try {
        setShowEstimation(true);
    } catch (error) {
        setError('Login failed here. Please check your username and password.');
    }
    
};

  return (
    <div className="bus-estimation-container ">
     <div className="source-destination" style={{textAlign:'center', fontSize:'26px', fontWeight:'500' }}>
      
      <button onClick={handleFindBus} style={{ display: 'inline-block', marginLeft: '10px',marginTop:'10px',fontWeight:'500' }}>Get Fleet Health</button>
      </div>
      <div>
        
      </div>

      {showEstimation &&  <FleetGallery busDataList={busDataList} /> } {/* Render the bus estimation cards if showEstimation is true */}
    </div>
  );
};

export default SampleFleetEstimationData;
