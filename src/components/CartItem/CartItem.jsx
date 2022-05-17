import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import removeIcon from '../../assets/img/remove-icon.png'
import './CartItem.css';

const CartItem = ({ item }) => {
    const cartContext = useContext(CartContext);

    return (
        <div className='item-cart'>
            <div className='item-cart__image-container'>
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className='item-cart__title'>
                <Link to={`/item/${item.id}`}>{item.title}</Link>
            </div>
            <div className='item-cart__units'>
                <span>{item.quantity}</span>
            </div>
            <div className='item-cart__price'>
                <span>$ {item.price}</span>
            </div>
            <div className='item-cart__total'>
                <span>$ {item.price * item.quantity}</span>
            </div>
            <div className='item-cart__remove-item'>
                <button onClick={() => cartContext.removeItem(item.id)}>
                    <img src={removeIcon} alt='Eliminar producto' />
                </button>
            </div>
        </div>
    );
};

export default CartItem;