import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the js-cookie library
import "./Home.css"


function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session cookies
        Cookies.remove('authToken'); // Replace 'authToken' with the actual name of your session cookie

        // Navigate to the login page
        navigate('/Login');
    };

    return (
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
