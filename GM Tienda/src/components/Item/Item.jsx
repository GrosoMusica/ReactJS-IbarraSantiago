import style from "./Item.module.css";

import { Link } from "react-router-dom";


const Item = (nombre, tags, precio, image, stock, description) => {

    return (

        <article className="Card">
            <h2>Sample: {nombre}</h2>
            <h4>Precio: $ {precio}</h4>
            
        </article>
    )
}

export default Item;