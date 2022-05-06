import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import NotFound from '../../components/NotFound/NotFound';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import { getProducts } from '../../helpers/ProductsAsyncMock';
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(res => {
                const productsFiltered = categoryId ? res.filter(product => product.category === categoryId) : res;
                setProducts(productsFiltered);
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