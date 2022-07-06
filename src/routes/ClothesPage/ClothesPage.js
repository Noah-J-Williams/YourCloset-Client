import axios from "axios";
import React, { useEffect, useState } from "react";
import './ClothesPage.scss';
import ClothCard from "../../components/ClothCard/ClothCard";
import { Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;
export default function ClothesPage(){
    
    const [clothes, setClothes] = useState({loading: true});
    const [display, setDisplay] = useState("all");
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
            if(display === "all"){
                setClothes(item.data.sort((a,b) => b.cost/b.wears - a.cost/a.wears));
            }
            else if(display === "headwear"){
                setClothes(item.data.filter(cloth => cloth.category === "headwear").sort((a,b) => b.cost/b.wears - a.cost/a.wears));
            }
            else if(display === "top"){
                setClothes(item.data.filter(cloth => cloth.category === "top").sort((a,b) => b.cost/b.wears - a.cost/a.wears));
            }
            else if(display === "bottom"){
                setClothes(item.data.filter(cloth => cloth.category === "bottom").sort((a,b) => b.cost/b.wears - a.cost/a.wears));
            }
            else if(display === "shoes"){
                setClothes(item.data.filter(cloth => cloth.category === "shoes").sort((a,b) => b.cost/b.wears - a.cost/a.wears));
            }
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

    const handleFilter = (e) => {
        if(e.target.name === "headwear"){
            setRender(!render);
            return setDisplay("headwear")
        }
        if(e.target.name === "top"){
            setRender(!render);
            return setDisplay("top")
        }
        if(e.target.name === "bottom"){
            setRender(!render);
            return setDisplay("bottom")
        }
        if(e.target.name === "shoes"){
            setRender(!render);
            return setDisplay("shoes")
        }

        setDisplay("all");
        setRender(!render);
    }



    return(
        !clothes.loading ?
        <div className="clothes-page">
            <div className="clothes-filter">
                <button className="clothes-filter__button" onClick={handleFilter} name="headwear">Headwear</button>
                <button className="clothes-filter__button" onClick={handleFilter} name="top">Tops</button>
                <button className="clothes-filter__button" onClick={handleFilter} name="bottom">Bottoms</button>
                <button className="clothes-filter__button" onClick={handleFilter} name="shoes">Shoes</button>
                <button className="clothes-filter__button" onClick={handleFilter}>Display All</button>
            </div>
            <Link to='/clothes/add'><button className="clothes-page__button">Add New Clothes!</button></Link>
            {clothes.map((item) => {
                return(
                    <ClothCard 
                    key={item.id} 
                    clothingId={item.id} 
                    handleUp={handleUp} 
                    handleDown={handleDown} 
                    handleDel={handleDel}
                    category={item.category}
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