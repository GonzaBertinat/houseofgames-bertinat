import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import NotFound from '../../components/NotFound/NotFound';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import { getProducts } from '../../helpers/ProductsAsyncMock';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(res => {  
                const product = res.find(product => product.id == id);
                setItem(product);    
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='item-detail-container'>
            {
                loading ? <SpinnerLoader/> : 
                item ? <ItemDetail item={item} /> : <NotFound />
            }
        </div>
    );
}

export default ItemDetailContainer;