import React from "react";
import logo from '../../assets/hanger.png';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return(
        <header className='header'>
            <Link className='header__link' to='/'><img className='header__logo' src={logo} alt='clothes hanger'/></Link>
            <nav className='header__nav'>
                <Link className='header__link' to='/clothes'>Clothes</Link>
                <Link className='header__link' to='/profile'>Profile</Link>
            </nav>
        </header>
    );
}