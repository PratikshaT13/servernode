// import React from 'react';
// import './Homepage.css';
// import DisplayPicture from '../assets/bus3.jpg';

// const Homepage = () => {
//   return (
//     <div id="homepage-section" className="homepage"> {/* Add id="homepage-section" */}
//       <div className="homepage-container">
//         <div className="display-picture">
//           <img src={DisplayPicture} alt="Display" />
//         </div>
//         <div className="content">
//           <h1>About Us</h1>
//           <div className="objective">
//             <h2>Objective 1:</h2>
//             <p>Design an intuitive user interface that caters to the needs of diverse users, including those with disabilities, and gather community feedback to address specific needs, particularly of vulnerable groups.</p>
//           </div>
//           <div className="objective">
//             <h2>Objective 2:</h2>
//             <p>Provide accurate estimates of daily bus requirements on an hourly basis.</p>
//           </div>
//           <div className="objective">
//             <h2>Objective 3:</h2>
//             <p>Monitor the real-time capacity of buses and provide updates to passengers.</p>
//           </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import DisplayPicture from '../assets/bus3.jpg';

const Homepage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/bus-estimation');
  };

  return (
    <div id="homepage-section" className="homepage">
      <div className="homepage-container">
        <div className="display-picture">
          <img src={DisplayPicture} alt="Display" />
        </div>
        <div className="content">
          <h1>About Us</h1>
          <div className="objective">
            <h2>Objective 1:</h2>
            <p>Design an intuitive user interface that caters to the needs of diverse users, including those with disabilities, and gather community feedback to address specific needs, particularly of vulnerable groups.</p>
          </div>
          <div className="objective">
            <h2>Objective 2:</h2>
            <p>Provide accurate estimates of daily bus requirements on an hourly basis.</p>
          </div>
          <div className="objective">
            <h2>Objective 3:</h2>
            <p>Monitor the real-time capacity of buses and provide updates to passengers.</p>
          </div>
          <button onClick={handleNavigate}>Go to Bus Estimation</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

