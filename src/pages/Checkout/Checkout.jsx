import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import MessageCard from '../../components/MessageCard/MessageCard';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import CartContext from '../../store/CartContext';
import happyFaceIcon from '../../assets/img/happy-face.png';
import sadFaceIcon from '../../assets/img/sad-face.png';
import './Checkout.css';
import { createOrder, getItemById, updateItem } from '../../services/firebase/firebase';

const Checkout = () => {

    const cartContext = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.id]: event.target.value
        })
    };
    
    const saveOrder = async (order) => {
        setLoading(true);
        const { id } = await createOrder(order);
        setOrderId(id);
        setLoading(false);
    }

    const updateProductsStock = async (products) => {
        for(const product of products) {
            const item = await getItemById(product.id);
            await updateItem(item.id, { stock: item.data().stock - product.quantity});
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        const order = {
            buyer: { name: data.name, phone: data.phone, email: data.email },
            items: cartContext.products.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
            date: new Date(),
            total: cartContext.getTotalPrice()
        }

        // Se guarda la orden
        saveOrder(order);

        // Se actualiza el stock de cada producto adquirido
        updateProductsStock(cartContext.products);

        // Se limpia el carrito
        cartContext.clear();
    };

    return (
        loading ? <SpinnerLoader /> :
        <section className='checkout'>
            <h1 className='checkout__title'>Finalizando compra</h1>
            {
                orderId ? <MessageCard icon={happyFaceIcon} title='Compra realizada con ??xito' message={`Tu c??digo de compra es: ${orderId}.\n\nRecibir??s tu pedido en la direcci??n indicada en las pr??ximas 48 horas h??biles.\n??Quer??s hacer otra compra?`} showHomeButton={true} />
                        : cartContext.products.length === 0 ? <MessageCard icon={sadFaceIcon} title='Tu carrito est?? vac??o' message='Te invitamos a que conozcas nuestros productos' showHomeButton={true}/> 
                        : <form className='checkout__form' onSubmit={handleSubmit}>
                            <div className='checkout__form-group'>
                                <h3 className='checkout__form-group-title'>Datos del comprador</h3>
                                <div className='checkout__input-group'>
                                    <label htmlFor='name'>Nombre: *</label>
                                    <input type='text' id='name' required={true} maxLength={50} value={data.name} onChange={handleChange} placeholder='Juan P??rez' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='phone'>Tel??fono: *</label>
                                    <input type='text' id='phone' required={true} maxLength={25} value={data.phone} onChange={handleChange} placeholder='+54 9 1234567890' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='email'>Correo Electr??nico: *</label>
                                    <input type='email' id='email' required={true} maxLength={50} value={data.email} onChange={handleChange} placeholder='correo@ejemplo.com' />
                                </div>
                            </div>
                            <div className='checkout__form-group'>
                                <h3 className='checkout__form-group-title'>Datos de la entrega</h3>
                                <div className='checkout__input-group'>
                                    <label htmlFor='streetName'>Calle: *</label>
                                    <input type='text' id='streetName' required={true} maxLength={30} placeholder='Av. Rivadavia' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='streetNumber'>N??mero: *</label>
                                    <input type='text' id='streetNumber' required={true} maxLength={6} placeholder='123' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='floor'>Piso / Departamento: </label>
                                    <input type='text' id='floor' maxLength={4} placeholder='2B' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='city'>Localidad: *</label>
                                    <input type='text' id='city' required={true} maxLength={50} placeholder='Caballito' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='zipCode'>C??digo Postal: *</label>
                                    <input type='text' id='zipCode' required={true} maxLength={6} placeholder='123' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='state'>Provincia: *</label>
                                    <input type='text' id='state' required={true} maxLength={40} placeholder='CABA' />
                                </div>
                            </div>
                            <div className='checkout__form-group'>
                                <h3 className='checkout__form-group-title'>Datos del pago</h3>
                                <div className='checkout__input-group'>
                                    <label htmlFor='cardNumber'>N??mero de tarjeta: *</label>
                                    <input type='text' id='cardNumber' required={true} maxLength={16} placeholder='1111 2222 3333 4444' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='cardName'>Nombre que figura en la tarjeta: *</label>
                                    <input type='text' id='cardName' required={true} maxLength={30} placeholder='JUAN M PEREZ' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='expireDate'>Fecha de expiraci??n: *</label>
                                    <input type='text' id='expireDate' required={true} maxLength={5} placeholder='05/23' />
                                </div>
                                <div className='checkout__input-group'>
                                    <label htmlFor='cvv'>C??digo de seguridad: *</label>
                                    <input type='text' id='cvv' required={true} maxLength={3} placeholder='123' />
                                </div>
                            </div>
                            <span>* Campos obligatorios</span>
                            <div className='checkout__form-footer'>
                                <span>Total a pagar: $ {cartContext.getTotalPrice()}</span>
                                <input className='checkout__submit-button' type='submit' value='Finalizar compra' />
                            </div>
                        </form>
            }
        </section>
    )
}

export default Checkout;