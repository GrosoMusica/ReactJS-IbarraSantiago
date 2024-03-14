import style from "./Item.module.css";

import { Link } from "react-router-dom";


const Item = ({nombre, tags, precio, image, stock, description}) => {

    return (

        <div className="Card">
            <h3>Etiquetas: {tags}</h3>
            <h2>Sample: {nombre}</h2>
            <img src={image} alt={nombre} width={300} />
            <h4>Precio: $ {precio}</h4>
            <a href="#">ver detalles...</a>
            
        </div>
    )
}

export default Item;