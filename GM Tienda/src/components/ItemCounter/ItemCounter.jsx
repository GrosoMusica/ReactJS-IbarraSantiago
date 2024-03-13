
import classes from "./ItemCounter.module.css";

import { useState } from "react";

const ItemCounter = ({ ini = 1, stock, onAdd }) => {
    const [contar, setContar] = useState(ini);

    const restar = () => {
        if (contar > 1) {
            setContar(cantidad => cantidad - 1);
        }
    };

    const sumar = () => {
        if (contar < stock) {
            setContar(cantidad => cantidad + 1);
        }
    };

    return (
        <article>
            <h3>{prev}</h3>
            <button onClick={restar}>-</button>
            <button onClick={() => onAdd(cantidad)}>Agregar Samples</button>
            <button onClick={sumar}>+</button>
        </article>
    );
};

export default ItemCounter;
