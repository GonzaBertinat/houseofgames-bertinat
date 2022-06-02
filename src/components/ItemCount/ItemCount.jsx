import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../store/CartContext';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd, item }) => {
    const cartContext = useContext(CartContext);    
    const [count,setCount] = useState(initial);

    const canAddToCart = () => {
        if(item.stock === 0)
            return false;
        if(!cartContext.isInCart(item.id))
            return true;
            
        const product = cartContext.products.find(p => p.id === item.id);
        return (product.quantity + count) <= stock;
    }

    const increaseCount = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const decreaseCount = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const enableAddButton = canAddToCart();
    
    return (
    <div className='item-count'>
        <div className='item-count__stock'>
            <span>Stock disponible: {stock}</span>
        </div>
        <div className='item-count__controlls'>
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>    
        <div className='item-count__add'>
            <button className={enableAddButton ? 'item-count__add-enabled' : 'item-count__add-disabled'} 
                    onClick={() => {onAdd(count)}}
                    disabled={!enableAddButton}>Agregar al carrito</button>                    
        </div>
    </div>);
}

export default ItemCount;