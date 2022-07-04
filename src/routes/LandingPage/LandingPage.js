import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    useEffect(() => {
        let token = sessionStorage.getItem('authToken');
        if(!!token){
            navigate('/clothes');
        }
    }, []);

    return(
        <main>
            <h1>Welcome to YourCloset</h1>
            <p>YourCloset helps you track your clothing, to make sure you get the most value you can from all of your clothing purchases</p>
            <p>Login to your account, or register a new one to get started!</p>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/register'><button>Register</button></Link>
        </main>
    );
}