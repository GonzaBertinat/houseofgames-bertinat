import React, { useContext, useState } from 'react';
import CartContext from '../../store/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

    const cartContext = useContext(CartContext);

    const onAddHandler = (quantityToAdd) => {
        cartContext.addItem(item, quantityToAdd);
    }
    
    return (
        <div className='item-detail'>
            <div className='item-detail__picture'>
                <div className='item-detail__picture-container'>
                    <img src={item?.pictureUrl} alt={item?.title} />
                </div>            
            </div>
            <div className='item-detail__info'>
                <div className='item-detail__info-container'>
                    <h3 className='item-detail__title'>{item?.title}</h3>
                    <p className='item-detail__description'>{item?.description}</p>
                    <div className='item-detail__price'>
                        <span>$ {item?.price}</span>
                    </div>
                    <div className='item-detail__counter'>
                        <ItemCount stock={item?.stock ? item.stock : 0} initial={1} onAdd={onAddHandler} item={item} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;