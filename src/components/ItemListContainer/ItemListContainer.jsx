import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const onAdd = (count) => {
    console.log(`La cantidad seleccionada es ${count}`);
}

const getProducts = () => {
    const productsList = [
        {
            id: 1,
            title: 'Microsoft Xbox Series X 1TB',
            description: 'Consola Microsoft',
            price: '$ 169.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_664180-MLA45041918051_032021-F.webp'
        },
        {
            id: 2,
            title: 'Sony PlayStation 5 Standard 825GB',
            description: 'Consola Sony',
            price: '$ 159.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_739160-MLA44484414453_012021-F.webp'
        },
        {
            id: 3,
            title: 'Microsoft Xbox Series S 512GB',
            description: 'Consola Microsoft',
            price: '$ 99.999',
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_933816-MLA45255172920_032021-F.webp'
        }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
        }, 2000);
    });
}

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <section className='item-list-container'>
            <ItemList items={products}/>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
        </section>
    );
}


export default ItemListContainer;