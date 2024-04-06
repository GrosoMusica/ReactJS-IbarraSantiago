

import classes from "./ItemCounter.module.css";

import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ ini = 1, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(ini);


    const restar = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const sumar = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1);
        }
    };

    



    return (
        <article>
            <h3>{quantity}</h3>
            <button onClick={restar}>-</button>
            <button onClick={() => onAdd(quantity)}>Agregar Samples</button>
            <button onClick={sumar}>+</button>
        </article>
    );
};

export default ItemCount;
