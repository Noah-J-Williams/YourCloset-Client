import React from "react";
import { Link } from 'react-router-dom';
import './Welcome.scss';
export default function Welcome () {

    return(
        <main className="landing">
            <h1 className="landing__header">Welcome to YourCloset</h1>
            <p className="landing__text">YourCloset helps you track your clothing to make sure you can get the most value from all of your clothing purchases.</p>
            <p className="landing__text">Login to your account, or register a new one to get started.</p>
            <div>
                <Link to='/login'><button className="landing__button">Login</button></Link>
                <Link to='/register'><button className="landing__button">Register</button></Link>
            </div>
        </main>
    )
}