import axios from "axios";
import React from "react";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
export default function LoginPage() {
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
            navigate(-1);
        })
    }
    return(
        <main>
            <form onSubmit={handleLogIn}>
                <Input
                    label='Email'
                    name='email'
                    type='email' />
                <Input
                    label='Password'
                    name='password'
                    type='password' />
                <button>Log In</button>
            </form>
        </main>
    );
}