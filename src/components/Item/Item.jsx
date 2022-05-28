import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import './Item.css';

const Item = ({ item }) => {
    const cartContext = useContext(CartContext);    
    const stockAvailable = item?.stock > 0;

    return (
        <div className='item'>
            <h3 className='item__title'>{item?.title}</h3>
            <div className="item__image-container">
                <img src={item?.pictureUrl} alt={item?.title} />
            </div>
            <div className="item__price">
                <span>$ {item?.price}</span>
            </div>
            <button className={`item__add ${stockAvailable ? 'item__add-enabled' : 'item__add-disabled'}`}
                    onClick={() => cartContext.addItem(item, 1)}
                    disabled={!stockAvailable}>+</button>
            <div className='item__details-button'>
                <Link to={`/item/${item?.id}`}>Ir al producto</Link>
            </div>
        </div>
    );
}

export default Item;
