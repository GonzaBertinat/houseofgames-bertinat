import React from 'react';
import './NavBar.css';
import logoHeader from '../../../src/assets/img/logo-header.png';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <a href='#'>
                    <img src={logoHeader}></img>
                </a>
            </div>
            <ul className='navbar__links'>
                <li className='navbar__link'>
                    <a href='#'>Inicio</a>
                </li>
                <li className='navbar__link'>
                    <a href='#'>Consolas</a>
                </li>
                <li className='navbar__link'>
                    <a href='#'>Videojuegos</a>
                </li>
                <li className='navbar__link'>
                    <a href='#'>Accesorios Gamer</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;