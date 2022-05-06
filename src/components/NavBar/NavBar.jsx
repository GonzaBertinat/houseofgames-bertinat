import React from 'react';
import './NavBar.css';
import logoHeader from '../../../src/assets/img/logo-header.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <Link to={'/'}>
                    <img src={logoHeader}></img>
                </Link>
            </div>
            <ul className='navbar__links'>
                <li className='navbar__link'>
                    <NavLink to={'/'} className={obj => obj.isActive ? 'navbar__link--active' : 'navbar__link--disabled'}>Inicio</NavLink>
                </li>
                <li className='navbar__link'>
                    <NavLink to={'/category/consolas'} className={obj => obj.isActive ? 'navbar__link--active' : 'navbar__link--disabled'}>Consolas</NavLink>
                </li>
                <li className='navbar__link'>
                    <NavLink to={'/category/videojuegos'} className={obj => obj.isActive ? 'navbar__link--active' : 'navbar__link--disabled'}>Videojuegos</NavLink>
                </li>
                <li className='navbar__link'>
                    <NavLink to={'/category/accesorios'} className={obj => obj.isActive ? 'navbar__link--active' : 'navbar__link--disabled'}>Accesorios Gamer</NavLink>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;