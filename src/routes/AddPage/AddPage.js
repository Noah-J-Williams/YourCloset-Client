import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input/Input';
const API = process.env.REACT_APP_API_URL;
export default function AddPage() {
    const navigate = useNavigate();
    const [value, setValue] = useState("top");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        let token = sessionStorage.getItem('authToken');
        e.preventDefault();
        let data = {
            title: e.target.title.value,
            cost: e.target.cost.value,
            category: value
        };
        axios.post(`${API}/user/data`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            navigate('/clothes');
        })
        .catch(err => {
            console.log(err);
        });
    };

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <Input
                label="Name"
                name="title"
                type="text" />
                <Input
                label="Cost"
                name="cost"
                type="float" />
                <select value={value} onChange={handleChange}>
                    <option value="headwear">Headwear</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="shoes">Shoes</option>
                </select>
                <button>Add</button>
            </form>
        </main>
    );
}
