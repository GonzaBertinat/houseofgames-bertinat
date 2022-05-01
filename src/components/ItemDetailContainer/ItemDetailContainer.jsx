import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const getItem = () => {
    const item = {
        id: 1,
        title: 'Microsoft Xbox Series X 1TB',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aperiam consectetur quod eos voluptas sit maxime nostrum. Excepturi alias harum, sunt iste blanditiis soluta nulla deserunt dolorum. Cum, distinctio blanditiis.',
        price: '$ 169.999',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_664180-MLA45041918051_032021-F.webp',
        stock: 5,
        category: 'Consola'        
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;