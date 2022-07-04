import axios from "axios";
import React, { useEffect, useState } from "react";
import './ClothesPage.scss';
import ClothCard from "../../components/ClothCard/ClothCard";
import { Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
export default function ClothesPage(){
    
    const [clothes, setClothes] = useState({loading: true});
    const [render, setRender] = useState(false);
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
            setClothes(item.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [render]);

    const handleUp = (clothingId) => {
        let data = {
            clothingId: clothingId
        };
        let token = sessionStorage.getItem('authToken');
        axios.put(`${API}/user/upWear`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            setRender(!render);
        })
        .catch(err => {
            console.log(err);
        });
    }
;
    const handleDown = (clothingId) => {
        let data = {
            clothingId: clothingId
        };
        let token = sessionStorage.getItem('authToken');
        axios.put(`${API}/user/downWear`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            setRender(!render);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const handleDel = (clothingId) => {
        let token = sessionStorage.getItem('authToken');
        axios.delete(`${API}/user/data`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            data: {
                clothingId: clothingId
            }
            
        })
        .then(() => {
            setRender(!render);
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        !clothes.loading ?
        <div className="clothes-page">
            <Link to='/clothes/add'><button>Add New Clothes!</button></Link>
            {clothes.map((item) => {
                return(
                    <ClothCard 
                    key={item.id} 
                    clothingId={item.id} 
                    handleUp={handleUp} 
                    handleDown={handleDown} 
                    handleDel={handleDel}
                    cost={item.cost} 
                    title={item.title} 
                    wears={item.wears}/>
                );
            })}
        </div>
        :
        <>
        </>
    );
}