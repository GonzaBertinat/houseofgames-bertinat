import React, { useContext } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import icon from '../../assets/img/face.png';

const Cart = () => {
    const cartContext = useContext(CartContext);
    
    return (
        <section className='cart'>
            <h1 className='cart__title'>Carrito de compras</h1>
            {
                cartContext.getCartQuantity() > 0 ?
                    <div className='cart-container'>
                        <div className='cart__header'>
                            <span className='cart__header__image'>Imagen</span>
                            <span className='cart__header__title'>Producto</span>
                            <span className='cart__header__units'>Cantidad</span>
                            <span className='cart__header__price'>Precio Unitario</span>
                            <span className='cart__header__total'>Subtotal</span>
                            <span className='cart__header__remove'>Eliminar</span>
                        </div>
                        {cartContext.products.map(product => <CartItem item={product} key={product.id}/>)}
                        <div className='cart__footer'>    
                            <button onClick={() => cartContext.clear()} className='cart__button'>Limpiar carrito</button> 
                            <span className='cart__total'>{`Total: $ ${cartContext.getTotalPrice()}`}</span>
                            <button className='cart__button'>Terminar mi compra</button>                              
                        </div>                           
                    </div> 
                    :
                    <div className='cart-empty-container'>
                        <div className='cart-empty__message'>
                            <div className='cart-empty__image-container'>
                                <img src={icon} alt="Emoji" />
                            </div>
                            <span>Tu carrito está vacío</span>
                        </div>
                        <span className='cart-empty__invite'>Te invitamos a que conozcas nuestros productos</span>
                        <Link to={'/'}>
                            <button className='cart__button'>
                                Ver catálogo
                            </button>
                        </Link>
                    </div> 
            }
        </section>
    );
}

export default Cart;