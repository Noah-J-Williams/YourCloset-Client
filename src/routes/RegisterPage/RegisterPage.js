import axios from "axios";
import React from "react";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function RegisterPage() {
    console.log(API);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post(`${API}/user/register`, {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value
        })
        .then(res => {
            const { token } = res.data;
            sessionStorage.setItem('authToken', token);
            navigate('/login');
        })
        .catch((err) => {
            console.log(err);
        })
    }
        
    
    return(
        <main>
            <form onSubmit={handleRegister}>
                <Input
                    label='Email'
                    name='email'
                    type='email' />
                <Input
                    label='Username'
                    name='username'
                    type='text' />
                <Input
                    label='Password'
                    name='password'
                    type='password' />
                <button>Sign up</button>
            </form>
        </main>
    );
}