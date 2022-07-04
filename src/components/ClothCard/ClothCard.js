import React from "react";
import './ClothCard.scss';
export default function ClothCard({clothingId, handleUp, handleDown, handleDel, title, cost, wears}){


    return(
        <section className='card'>
            <h2 className="card__title">{title}</h2>
            <img className="card__img" src=''/>
            <p className="card__text">{`$${cost}`}</p>
            <p className="card__text">{cost/wears === Infinity ? "$" + cost + " per wear" : "$" + (Math.round(cost/wears * 100) / 100) + " per wear"}</p>
            <div className="card-wears">
                <button onClick={() => handleDown(clothingId)} className="card-wears__button">-</button>
                <p className="card-wears__number">{wears}</p>
                <button onClick={() => handleUp(clothingId)} className="card-wears__button">+</button>
            </div>
            <button onClick={() => handleDel(clothingId)}>Delete</button>
        </section>
    );
}