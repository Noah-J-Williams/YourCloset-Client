import React from "react";
import axios from "axios";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import './LoginForm.scss';
const API = process.env.REACT_APP_API_URL;
export default function LoginForm() {
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();

        axios.post(`${API}/user/login`, {
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(res => {
            const { token } = res.data;
            sessionStorage.setItem('authToken', token);
            navigate('/clothes');
        })
    }
    return(
        <main className="login">
            <form onSubmit={handleLogIn}>
                <Input
                    label='Email'
                    name='email'
                    type='email' />
                <Input
                    label='Password'
                    name='password'
                    type='password' />
                <button className="login__button">Log In</button>
            </form>
        </main>
    );
}