import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from '../../components/Welcome/Welcome';
export default function LandingPage() {
    const navigate = useNavigate();
    useEffect(() => {
        let token = sessionStorage.getItem('authToken');
        if(!!token){
            navigate('/clothes');
        }
    }, []);

    return(
        <Welcome />
    );
}