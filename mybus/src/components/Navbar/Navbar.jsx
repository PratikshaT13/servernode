// // import React from 'react';
// // import './Navbar.css';
// // import Logo from '../assets/logo_1.jpg'; 

// // // const Navbar = () => {
// // //   return (
// // //     <nav className="navbar">
// // //       <div className="navbar-container">
// // //         <div className="navbar-logo">
// // //         <img src={Logo} alt="Logo" className="logo" />
// // //         </div>
// // //         <ul className="nav-menu">
// // //           <li className="nav-item">
// // //             <a href="/Homepage">Homepage</a>
// // //           </li>
// // //           <li className="nav-item">
// // //             <a href="/Login">About</a>
// // //           </li>
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // const Navbar = () => {
// //   const scrollToSection = (sectionId) => {
// //     const section = document.getElementById(sectionId);
// //     if (section) {
// //       section.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <div className="navbar-logo">
// //           <img src={Logo} alt="Logo" className="logo" />
// //         </div>
// //         <ul className="nav-menu">
// //           <li className="nav-item">
// //             <a href="#homepage-section" onClick={() => scrollToSection('homepage-section')}>Homepage</a>
// //           </li>
// //           <li className="nav-item">
// //             <a href="#about-section" onClick={() => scrollToSection('about-section')}>About</a>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import Logo from '../assets/logo-42.jpg';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <div className="navbar-logo">
// //         <img src={Logo} alt="Logo" className="logo" />
// //         </div>
// //         <ul className="nav-menu">
// //           <li className="nav-item">
// //             <button className="nav-link" onClick={() => handleNavigation('/homepage')}>
// //               Home
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button className="nav-link" onClick={() => handleNavigation('/login')}>
// //               Login
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button className="nav-link" onClick={() => handleNavigation('/signup')}>
// //               Sign Up
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// return (
//   <nav className="navbar">
//     <div className="navbar-container">
//       <div className="navbar-logo">
//       <img src={Logo} alt="Logo" className="logo" />
//       </div>
//       <ul className="nav-menu">
//         <li className="nav-item">
//           <a className="nav-link" href="/homepage">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/login">
//             Login
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/signup">
//             Sign Up
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/logo-pic.jpg';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <ul className="nav-menu-r">
        <li className="nav-item dropdown">
          <a href="#" className="service-btn">
            Services
           <i className="fa fa-caret-down"></i>
          </a>
      <div className="dropdown-content">
          <a href="/bus-estimation" className="nav-link" onClick={() => navigate('/bus-estimation')}>
            Bus Capacity Estimation
          </a>
      <a href="/login" className="nav-link" onClick={() => navigate('/login')}>
            Bus Demand Estimation
      </a>
    </div>
  </li>
</ul>
        <div className="navbar-logo" onClick={() => handleNavigation('/homepage')}>
          { <img src={Logo} alt="Logo" className="logo" /> }
          
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/login" className="login-signup">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="login-signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
