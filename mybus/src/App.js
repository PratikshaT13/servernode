// //import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './components/Homepage/Homepage';
// import Login from './components/LoginForm/Login';
// import Navbar from './components/Navbar/Navbar';


// import React, { useState } from 'react';
// import './App.css';

// // function App() {
// //   const [loggedIn, setLoggedIn] = useState(false);

// //   return (
// //     <div className="App">
// //       {!loggedIn ? (
// //         <Login setLoggedIn={setLoggedIn} />
// //       ) : (
// //         <Homepage />
// //       )}
// //     </div>
// //   );
// // }

// import SignUp from './components/SignUp/SignUp';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   return (
//     <div className="App">
//       <Navbar/>
//       {!loggedIn && !showSignUp && (
//         <Login setLoggedIn={setLoggedIn} setShowSignUp={setShowSignUp} />
//       )}
//       {!loggedIn && showSignUp && (
//         <SignUp setShowSignUp={setShowSignUp} />
//       )}
//       {loggedIn && (
//         <p>Welcome! You are logged in.</p>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Homepage from './components/Homepage/Homepage';
import Login from './components/LoginForm/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar'
import BusEstimationModule from './components/BusEstimationModule/BusEstimationModule';
import SampleBusEstimationData from './components/BusEstimationModule/SampleBusEstimationData';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="/bus-estimation" element={<SampleBusEstimationData />} />
      </Routes>
    </Router>
  );
}

export default App;

