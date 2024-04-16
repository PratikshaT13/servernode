// import React, { useState } from 'react';
// import'./Login.css';
// import { FaUser,FaLock} from "react-icons/fa";
// import { useHistory} from 'react-router-dom';


// // const Login=()=>{
// //     return(
// //         <div className='wrapper'>
// //             <form action="">
// //                 <h1>Login</h1>
// //                 <div className="input-box">
// //                    <input type="text" placeholder='Username' required/>
// //                    <FaUser className="icon"/>                
// //                 </div>
// //                 <div className="input-box">
// //                    <input type="password" placeholder='Password' required/>
// //                    <FaLock className="icon"/>
// //                 </div>

// //                 <div className="remember-forgot">
// //                     <label ><input type="checkbox"/>Remember me</label>
// //                     <a href="/">Forgot password?</a>
// //                 </div>

// //                 <button type="submit">Login</button>

// //                 <div className="register-link">
// //                     <p>Don't have an account?<a href="/">Register</a></p>
// //                 </div>
// //             </form>

// //         </div>
// //     )
// // }


// // const Login = ({ setLoggedIn }) => {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
  
// //     const handleSubmit = (e) => {
// //       e.preventDefault();
      
// //       if (username === 'user' && password === 'pass') {
        
// //         setLoggedIn(true);
// //       } else {
        
// //         setError('Invalid username or password');
// //       }
// //     };
  
// //     return (
// //       <div className='wrapper'>
// //         <form onSubmit={handleSubmit}>
// //           <h1>Login</h1>
// //           <div className='input-box'>
// //             <input
// //               type='text'
// //               placeholder='Username'
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className='input-box'>
// //             <input
// //               type='password'
// //               placeholder='Password'
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
  
// //           {error && <p className="error">{error}</p>}
  
// //           <button type='submit'>Login</button>
  
// //           <div className='register-link'>
// //             <p>
// //               Don't have an account?
// //               <span onClick={handleSignUpClick}>Register</span>
// //             </p>
// //           </div>
// //         </form>
// //       </div>
// //     );
// //   };

// const Login = ({ setLoggedIn }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (username === 'user' && password === 'pass') {
//             // Set the user as logged in
//             setLoggedIn(true);

//             // Redirect to the homepage (replace 'homepage_url' with the actual URL)
//             window.location.href = '/homepage';
//         } else {
//             setError('Invalid username or password');
//         }
//     };

//     const handleSignUpClick = () => {
//         setShowSignUp(true);
//     };

//     return (
//         <div className='wrapper'>
//             <form onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <div className='input-box'>
//                     <input
//                         type='text'
//                         placeholder='Username'
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                     <FaUser className="icon"/>
//                 </div>
//                 <div className='input-box'>
//                     <input
//                         type='password'
//                         placeholder='Password'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <FaLock className="icon"/>
//                 </div>

//                 {error && <p className="error">{error}</p>}

//                 <button type='submit'>Login</button>

//                 <div className='register-link'>
//                     <p>
//                         Don't have an account?
//                         {/* Assuming handleSignUpClick is defined in the parent component */}
//                         <span onClick={handleSignUpClick}>Register</span>
//                     </p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock authentication check
        if (username === 'user' && password === 'pass') {
            // Set the user as logged in
            setLoggedIn(true);

            // Navigate to the homepage
            navigate('/homepage');
        } else {
            setError('Invalid username or password');
        }
    };

    const handleSignUpClick = () => {
        // Navigate to the SignUp page
        navigate('/signup');
    };

    return (
            <div className="login-background">
            <div class='wrapper' >
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon"/>                
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon"/>
                </div>

                {/* Remember me and Forgot password links */}
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>Remember me
                    </label>
                    <a href="/">Forgot password?</a>
                </div>

                {/* Error message */}
                {error && <p className="error">{error}</p>}

                {/* Login button */}
                <button type="submit">Login</button>

                {/* Register link */}
                <div className="register-link">
                    <p>Don't have an account?<span onClick={handleSignUpClick}>Register</span></p>
                </div>
            </form>
        </div>
        </div>
       
    );
};

export default Login;

