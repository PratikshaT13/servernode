// import React from 'react';
// import BusEstimationModule from './BusEstimationModule'; 

// const BusEstimationList = ({ busDataList }) => {
//   return (
//     <div>
//       {busDataList.map((busData, index) => (
//         <BusEstimationModule
//           key={index}
//           timestamp={busData.timestamp}
//           busNumber={busData.busNumber}
//         />
//       ))}
//     </div>
//   );
// }
// export default BusEstimationList;
import React from 'react';
import BusEstimationModule from './BusEstimationModule'; 

const BusEstimationList = ({ busDataList }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {busDataList.map((busData, index) => (
        <BusEstimationModule
          key={index}
          timestamp={busData.timestamp}
          busNumber={busData.busNumber}
          passNumber={busData.passNumber}
        />
      ))}
    </div>
  );
}

export default BusEstimationList;

