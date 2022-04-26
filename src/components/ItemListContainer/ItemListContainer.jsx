import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

const onAdd = (count) => {
    console.log(`La cantidad seleccionada es ${count}`);
}

const ItemListContainer = () => {
    return (
        <section className='item-list-container'>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </section>
    );
}


export default ItemListContainer;