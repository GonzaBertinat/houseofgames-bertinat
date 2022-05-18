import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import NotFound from '../NotFound/NotFound';
import './ItemDetailContainer.css';

const getProduct = itemId => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', itemId);

    return getDoc(itemRef)
            .then((snapshot) => { 
                return snapshot.exists() ? {id: snapshot.id, ...snapshot.data()} : null;
            });
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