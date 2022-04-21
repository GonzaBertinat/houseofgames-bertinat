import React from 'react';
import './CartWidget.css';
import cartIcon from '../../assets/img/cart.png';

const CartWidget = () => {
    return (
        <div className="navbar__cart">
            <img src={cartIcon}></img>
        </div>
    );
}

export default CartWidget;