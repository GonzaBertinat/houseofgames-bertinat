import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    return (
        <div className='item'>
            <h3 className='item__title'>{item?.title}</h3>
            <div className="item__image-container">
                <img src={item?.pictureUrl} alt={item?.title} />
            </div>
            <p className='item__description'>{item?.description}</p>
            <div className="item__price">
                <span>{item?.price}</span>
            </div>
            <div className='item__details-button'>
                <a href="#">Ir al producto</a>            
            </div>
        </div>
    );
}

export default Item;
