import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Homepage from './components/Homepage/Homepage';
import Login from './components/LoginForm/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import BusEstimationModule from './components/BusEstimationModule/BusEstimationModule';
import SampleBusEstimationData from './components/BusEstimationModule/SampleBusEstimationData';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import Footer from './components/Footer/Footer';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in your actual implementation)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1300); // Example: 3 seconds loading time

    // Clean up timer
    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <Router style={{ height: '100%' }}>
      
      <Navbar />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/bus-estimation" element={<SampleBusEstimationData />} />
        </Routes>
      )}
      
    </Router>
  );
}

export default App;