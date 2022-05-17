import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import './Item.css';

const Item = ({ item }) => {
    const cartContext = useContext(CartContext);

    return (
        <div className='item'>
            <h3 className='item__title'>{item?.title}</h3>
            <div className="item__image-container">
                <img src={item?.pictureUrl} alt={item?.title} />
            </div>
            <p className='item__description'>{item?.description}</p>
            <div className="item__price">
                <span>$ {item?.price}</span>
            </div>
            <button className='item__add' onClick={() => cartContext.addItem(item, 1)}>+</button>
            <div className='item__details-button'>
                <Link to={`/item/${item?.id}`}>Ir al producto</Link>
            </div>
        </div>
    );
}

export default Item;
