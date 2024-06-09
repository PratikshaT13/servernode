// src/components/LoginForm.js

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import authService from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await authService.loginS(username, password);
            console.log('Login successful:', data);
            if (data) {  // Adjust this condition based on your API's response
                navigate('/homepage');
            } else {
                setError('Login failed. Please check your username and password.');
            }
        } catch (error) {
            setError('Login failed here. Please check your username and password.');
        }
    };

    const handleSignUpClick = () => {
        // Navigate to the SignUp page
        navigate('/signup');
    };

    
    return (
        <div className="login-background">
            <div className='wrapper'>
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
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className="icon" />
                    </div>

                    {/* Remember me and Forgot password links */}
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="/">Forgot password?</a>
                    </div>

                    {/* Error message */}
                    {error && <p className="error">{error}</p>}

                    {/* Login button */}
                    <button type="submit" >Login</button>

                    {/* Register link */}
                    <div className="register-link">
                        <p>Don't have an account?<span onClick={handleSignUpClick}>Register</span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;






