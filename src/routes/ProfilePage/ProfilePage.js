import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
export default function ProfilePage() {
    
    const [clothes, setClothes] = useState({loading: true});
    const [highest, setHighest] = useState();
    const [lowest, setLowest] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        let token = sessionStorage.getItem('authToken');
        if(!token){
            navigate('/');
        }
        axios.get(`${API}/user/data`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then((item) => {
            setClothes(item.data.sort((a, b) => b.cost / b.wears -  a.cost / a.wears));
            setHighest({
                headwear: item.data.filter(cloth => cloth.category === "headwear")[0],
                top: item.data.filter(cloth => cloth.category === "top")[0],
                bottom: item.data.filter(cloth => cloth.category === "bottom")[0],
                shoes: item.data.filter(cloth => cloth.category === "shoes")[0]
            })
            setLowest({
                headwear: item.data.filter(cloth => cloth.category === "headwear").at(-1),
                top: item.data.filter(cloth => cloth.category === "top").at(-1),
                bottom: item.data.filter(cloth => cloth.category === "bottom").at(-1),
                shoes: item.data.filter(cloth => cloth.category === "shoes").at(-1)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleLogout = (e) => {
        sessionStorage.clear();
    }
    
    return(
        !clothes.loading ?
        <main>
            <h2>Your highest cost per wear outfit</h2>
            <p>Cost per wear of this outfit is</p>
            <p>{"$" + Math.round((highest.headwear.cost + highest.top.cost + highest.bottom.cost + highest.shoes.cost) / (highest.headwear.wears + highest.top.wears + highest.bottom.wears + highest.shoes.wears))}</p>
            <p>{highest.headwear.title}</p>
            <p>{highest.top.title}</p>
            <p>{highest.bottom.title}</p>
            <p>{highest.shoes.title}</p>
            <h2>Your lowest cost per wear outfit</h2>
            <p>{"$" + Math.round((lowest.headwear.cost + lowest.top.cost + lowest.bottom.cost + lowest.shoes.cost) / (lowest.headwear.wears + lowest.top.wears + lowest.bottom.wears + lowest.shoes.wears))}</p>
            <p>{lowest.headwear.title}</p>
            <p>{lowest.top.title}</p>
            <p>{lowest.bottom.title}</p>
            <p>{lowest.shoes.title}</p>
            <button onClick={handleLogout}>Log out</button>
        </main>
        :
        <>
        </>
    );
}