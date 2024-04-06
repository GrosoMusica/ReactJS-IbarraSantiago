

import classes from "./ItemCounter.module.css";

import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ ini = 1, stock, onAdd }) => {
    const [contar, setContar] = useState(ini);


    const restar = () => {
        if (contar > 1) {
            setContar(prev => prev - 1);
        }
    };

    const sumar = () => {
        if (contar < stock) {
            setContar(prev => prev + 1);
        }
    };

    



    return (
        <article>
            <h3>{contar}</h3>
            <button onClick={restar}>-</button>
            <button onClick={() => onAdd(contar)}>Agregar Samples</button>
            <button onClick={sumar}>+</button>
        </article>
    );
};

export default ItemCount;
