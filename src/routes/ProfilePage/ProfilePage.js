import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './ProfilePage.scss';
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

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    }
    
    return(
        !clothes.loading ?
        <main className="profile">
            <div className="profile-outfit">
            <h2 className="profile-outfit__header-high">Your highest cost per wear outfit</h2>
            <p className="profile-outfit__text">Cost per wear of this outfit is</p>
            <p className="profile-outfit__text">{"Cost/Wear = $" + Math.round((highest.headwear.cost + highest.top.cost + highest.bottom.cost + highest.shoes.cost) / (highest.headwear.wears + highest.top.wears + highest.bottom.wears + highest.shoes.wears))}</p>
            <p className="profile-outfit__text">{highest.headwear.title}</p>
            <p className="profile-outfit__text">{highest.top.title}</p>
            <p className="profile-outfit__text">{highest.bottom.title}</p>
            <p className="profile-outfit__text">{highest.shoes.title}</p>
            </div>
            <div className="profile-outfit">
            <h2 className="profile-outfit__header-low">Your lowest cost per wear outfit</h2>
            <p className="profile-outfit__text">{"Cost/Wear $" + Math.round((lowest.headwear.cost + lowest.top.cost + lowest.bottom.cost + lowest.shoes.cost) / (lowest.headwear.wears + lowest.top.wears + lowest.bottom.wears + lowest.shoes.wears))}</p>
            <p className="profile-outfit__text">{lowest.headwear.title}</p>
            <p className="profile-outfit__text">{lowest.top.title}</p>
            <p className="profile-outfit__text">{lowest.bottom.title}</p>
            <p className="profile-outfit__text">{lowest.shoes.title}</p>
            </div>
            <button onClick={handleLogout} className="profile__button">Log out</button>
        </main>
        :
        <>
        </>
    );
}