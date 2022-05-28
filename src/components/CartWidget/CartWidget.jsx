import React, { useContext } from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/img/cart.png';
import CartContext from '../../store/CartContext';

const CartWidget = () => {
    const cartContext = useContext(CartContext);

    return (
        <div className='navbar__cart'>
            <Link to={'/cart'}>
                <div className='navbar__cart-container'>
                    <img src={cartIcon} alt='Carrito de compras'></img>
                    {cartContext.getCartQuantity() > 0 ? <div className='navbar__cart-quantity'>{cartContext.getCartQuantity()}</div> : '' }      
                </div>                
            </Link>
        </div>
    );
}

export default CartWidget;