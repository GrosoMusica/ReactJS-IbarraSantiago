
import classes from "./ItemCounter.module.css";

import { useState } from "react";

const ItemCounter = ({ ini = 1, stock, agregar }) => {
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
            <button onClick={() => agregar(contar)}>Agregar Samples</button>
            <button onClick={sumar}>+</button>
        </article>
    );
};

export default ItemCounter;
