import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import './Item.css';

const Item = ({ item }) => {
    const cartContext = useContext(CartContext);    
    
    const canAddToCart = () => {
        if(item.stock === 0)
            return false;
        if(!cartContext.isInCart(item.id))
            return true;
            
        const product = cartContext.products.find(p => p.id === item.id);
        return product.quantity < item.stock;
    }

    const enableAddButton = canAddToCart();

    return (
        <div className='item'>
            <div className='item__title-container'>
                <h3 className='item__title'>{item?.title}</h3>
            </div>        
            <div className="item__image-container">
                <img src={item?.pictureUrl} alt={item?.title} />
            </div>
            <div className="item__price">
                <span>$ {item?.price}</span>
            </div>
            <div className='item__add-container'>
                <button className={`item__add ${enableAddButton ? 'item__add-enabled' : 'item__add-disabled'}`}
                        onClick={() => cartContext.addItem(item, 1)}
                        disabled={!enableAddButton}>+</button>
            </div>
            <div className='item__details-button-container'>
                <div className='item__details-button'>
                    <Link to={`/item/${item?.id}`}>Ir al producto</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
