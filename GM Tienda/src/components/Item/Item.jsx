import styles from "./Item.module.css";

import { Link } from "react-router-dom";


const Item = ({id, nombre, tags, precio, image, stock, description}) => {

    return (

        <div className="Card">
            <h4>Etiquetas: { tags }</h4>
            <h2>Sample: {nombre}</h2>
            <img src={image} alt={nombre} width={300} />
            <h4>Precio: $ {precio}</h4>
            <Link to={`/item/${id}`}>ver detalles...</Link>

            
        </div>
    )
}

export default Item;