import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import { getItemById } from '../../services/firebase/firebase';
import NotFound from '../NotFound/NotFound';
import './ItemDetailContainer.css';

const getProduct = async (itemId) => {
    const snapshot = await getItemById(itemId);
    return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
}

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProduct(id)
            .then(res => {  
                setItem(res);    
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <section className='item-detail-container'>
            {
                loading ? <SpinnerLoader/> : 
                item ? <ItemDetail item={item} /> : <NotFound />
            }
        </section>
    );
}

export default ItemDetailContainer;