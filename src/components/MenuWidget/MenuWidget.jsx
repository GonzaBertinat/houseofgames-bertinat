import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import menuIcon from '../../../src/assets/img/menu.png';
import './MenuWidget.css';

const MenuWidget = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className='menu-widget'>
            <div className='menu-widget__icon-container' onClick={openMenu}>
                <img src={menuIcon} alt='Menú'/>
            </div>
            <div className={`sidebar ${isMenuOpen ? 'sidebar--show' : ''}`}>
                <ul className='sidebar__links'>
                    <li className='sidebar__link'>
                        <NavLink to={'/'} onClick={closeMenu} className={obj => obj.isActive ? 'sidebar__link--active' : 'sidebar__link--disabled'}>Inicio</NavLink>
                    </li>
                    <li className='sidebar__link'>
                        <NavLink to={'/category/consolas'} onClick={closeMenu} className={obj => obj.isActive ? 'sidebar__link--active' : 'sidebar__link--disabled'}>Consolas</NavLink>
                    </li>
                    <li className='sidebar__link'>
                        <NavLink to={'/category/videojuegos'} onClick={closeMenu} className={obj => obj.isActive ? 'sidebar__link--active' : 'sidebar__link--disabled'}>Videojuegos</NavLink>
                    </li>
                    <li className='sidebar__link'>
                        <NavLink to={'/category/accesorios'} onClick={closeMenu} className={obj => obj.isActive ? 'sidebar__link--active' : 'sidebar__link--disabled'}>Accesorios Gamer</NavLink>
                    </li>
                    <li className='sidebar__close'>
                        <button onClick={closeMenu}>Cerrar Menú</button>
                    </li>
                </ul>
            </div> 
        </div>
    );
}

export default MenuWidget;