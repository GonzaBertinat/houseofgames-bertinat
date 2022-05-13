import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
                        <span>{item?.price}</span>
                    </div>
                    <div className='item-detail__counter'>
                        <ItemCount stock={item?.stock ? item.stock : 0} initial={1} onAdd={onAddHandler} />
                    </div>  
                    <div className='item-detail__controlls'>
                        <button onClick={() => {console.log(cartContext.products)}}>Ver carrito</button>
                        <button onClick={() => {cartContext.removeItem(item.id)}}>Eliminar producto</button>
                        <button onClick={() => {cartContext.clear()}}>Limpiar carrito</button>
                        <button onClick={() => {console.log(cartContext.getCartQuantity())}}>Cantidad de productos</button>
                        <button onClick={() => {console.log(cartContext.isInCart(item.id))}}>Está en el carrito?</button>
                    </div>
                    {cartContext.getCartQuantity() > 0 && <Link className='item-detail__to-cart' to={'/cart'}>{`Finalizar compra - ${cartContext.getCartQuantity()} item/s`}</Link>}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;