import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <section className='item-list-container'>
            <h1 className='item-list-container__greeting'>{greeting}</h1>
        </section>
    );
}

export default ItemListContainer;