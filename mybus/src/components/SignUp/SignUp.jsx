// import React, { useState } from 'react';
// //import './Login.css';
// import { FaUser, FaLock } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";

// const SignUp = ({ setLoggedIn }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

   
//     if (username && password && phoneNumber) {
      
//       setLoggedIn(true);
//     } else {
      
//       setError('Please enter both username and password');
//     }
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <div className='input-box'>
//           <input
//             type='text'
//             placeholder='Username'
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <FaUser className="icon" />
//         </div>
//         <div className='input-box'>
//           <input
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <FaLock className="icon" />
//         </div>
//         <div className='input-box'>
//           <input
//             type='tel' 
//             placeholder='Phone Number'
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <IoCall className="icon"/>
//         </div>

//         {error && <p className="error">{error}</p>}

//         <button type='submit'>Sign Up</button>

//         <div className='register-link'>
//           <p>
//             Already have an account?
//             <a href='/'>Login</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 
import { FaUser, FaLock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        // Mock sign-up process
        if (username && password && phoneNumber) {
            // Navigate to the homepage
            navigate('/homepage');
        } else {
            setError('Please enter username, password, and phone number');
        }
    };

    const handleLoginClick = () => {
        // Navigate to the login page
        navigate('/login');
    };

    return (
        <div className='signup-background'>
        <div className='wrapper' >
            <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <IoCall className='icon'/>
                </div>

                {/* Error message */}
                {error && <p className="error">{error}</p>}

                {/* Sign Up button */}
                <button type="submit">Sign Up</button>

                {/* Login link */}
                <div className="login-link">
                    <p>Already have an account?  <span onClick={handleLoginClick}>Login</span></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default SignUp;


