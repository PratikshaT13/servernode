
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 
import { FaUser, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import authService from '../../services/LoginService';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await authService.signupS(username, password, email)
            console.log('Login successful:', data);
            if (true) {  // Adjust this condition based on your API's response
                navigate('/login')
            } else {
                setError('Login failed. Please check your username and password.');
            }
        } catch (error) {
            setError('Login failed. Please check your username and password.');
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
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <IoMail className='icon'/>
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


