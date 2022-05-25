import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import { getAllItems, getItemsByCategoryId } from '../../services/firebase/firebase';
import NotFound from '../NotFound/NotFound';
import './ItemListContainer.css'

const getProducts = async (categoryId) => {
    const snapshot = await (categoryId ? getItemsByCategoryId(categoryId) : getAllItems());
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
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