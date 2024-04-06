import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
        } else {
            console.error("¡El producto ya está en el carrito!");
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
}



