import React from 'react'
import './SpinnerLoader.css';

const SpinnerLoader = () => {
    return (
        <div className='spinner-loader'>
            <div className='spinner-circle'></div>
            <span className='spinner-text'>Cargando...</span>
        </div>
    )
}

export default SpinnerLoader;