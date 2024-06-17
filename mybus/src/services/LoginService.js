import axios from 'axios';

const API_URL = 'http://localhost:8010'; 

const loginS = async (username, password) => {
    try {
        const response = await axios.get(`${API_URL}/api/auth/login`,  {params :{
            username,
            password

    }});
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

const signupS = async (username, password, email) => {
    try {
        const response = await axios.get(`${API_URL}/signup` , 
            {
            params: {
                username,
                password,
                email
            },
        });
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};


const busListS = async (source, destination, passengers) => {

    try {
        const response = await axios.get(`${API_URL}/busData`, {params: {
            source, destination, passengers

    }});
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};



const authService = {loginS, signupS, busListS};

export default  authService;
