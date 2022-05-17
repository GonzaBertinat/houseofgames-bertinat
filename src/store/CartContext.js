import { createContext, useState } from 'react';

const CartContext = createContext({
    products: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    getCartQuantity: () => {},
    isInCart: () => {},
    getTotalPrice: () => {}
});

export const CartContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([]);
    
    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setProductList(productList.map(product => product.id === item.id ? {...product, quantity: product.quantity + quantity} : product));
        } else {
            setProductList([{...item, quantity}, ...productList])    
        }
    };
    
    const removeItem = (itemId) => {
        setProductList(productList.filter(product => product.id !== itemId));
    };

    const clear = () => {
        setProductList([]);
    };

    const getCartQuantity = () => {
        return productList.reduce((total, product) => total + product.quantity, 0);
    };

    const isInCart = (itemId) => {
        return productList.some(product => product.id === itemId);
    };

    const getTotalPrice = () => {
        return productList.reduce((total, product) => {
            return total + (product.quantity * product.price);
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            products: productList,
            addItem,
            removeItem,
            clear,
            getCartQuantity,
            isInCart,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;