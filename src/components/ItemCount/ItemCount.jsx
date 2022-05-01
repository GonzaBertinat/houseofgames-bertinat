import React, { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {

    const stockAvailable = stock > 0;

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
    
    const [count,setCount] = useState(initial);

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
            <button className={stockAvailable ? 'item-count__add-enabled' : 'item-count__add-disabled'} 
                    onClick={() => {onAdd(count)}}
                    disabled={!stockAvailable}>Agregar al carrito</button>                    
        </div>
    </div>);
}

export default ItemCount;