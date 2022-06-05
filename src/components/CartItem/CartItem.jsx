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
            <div className='item-cart__units item-cart__units--responsive'>
                <span className='item-cart__property'>Cantidad</span>
                <span>{item.quantity}</span>
            </div>
            <div className='item-cart__price item-cart__price--responsive'>
                <span className='item-cart__property'>Precio Unitario</span>
                <span>$ {item.price}</span>
            </div>
            <div className='item-cart__total item-cart__total--responsive'>
                <span className='item-cart__property'>Subtotal</span>
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