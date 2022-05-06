import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='not-found__title'>Error: la página solicitada no existe</h1>
            <div className='not-found__button'>
                <Link to="/">Volver al Home</Link>
            </div>        
        </div>
    );
}

export default NotFound;