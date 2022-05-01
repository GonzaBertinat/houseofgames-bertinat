import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const onAdd = (count) => {
    console.log(`La cantidad seleccionada es ${count}`);
}

const ItemDetail = ({ item }) => {
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
                        <span>{item?.price}</span>
                    </div>
                    {item.title && <ItemCount stock={item?.stock ? item.stock : 0} initial={1} onAdd={onAdd} />}    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;