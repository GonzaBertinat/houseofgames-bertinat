import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './ItemListContainer.css'
import NotFound from '../NotFound/NotFound';

const getProducts = categoryId => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    
    if(categoryId) {
        const q = query(itemsCollection, where('category', '==', categoryId));
        return getDocs(q)
                .then((snapshot) => { 
                    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                });
    } else {
        return getDocs(itemsCollection)
                .then((snapshot) => { 
                    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                });  
    }     
}

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId)
            .then(res => {
                setProducts(res);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId])

    return (
        <section className='item-list-container'>
            {
                loading ? <SpinnerLoader/> : 
                products.length > 0 ? <ItemList items={products}/> : <NotFound />
            }
        </section>
    );
}

export default ItemListContainer;