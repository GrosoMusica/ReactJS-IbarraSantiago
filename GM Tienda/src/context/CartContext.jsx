import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [totalQuantity, setTotalQuantity] = useState(0);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotalQuantity = () => {
            return cart.reduce((accumulator, prod) => accumulator + prod.quantity, 0);
        }

        const getTotal = () => {
            return cart.reduce((accumulator, prod) => accumulator + prod.quantity * prod.precio, 0);
        }

        setTotalQuantity(getTotalQuantity());
        setTotal(getTotal());
    }, [cart]);

    const addItem = (item, quantity) => {
            setCart(prev => [...prev, {...item, quantity}]);

    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)    
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};




