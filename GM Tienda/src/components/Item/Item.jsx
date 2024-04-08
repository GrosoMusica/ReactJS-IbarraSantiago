import styles from "./Item.module.css";

import { Link } from "react-router-dom";


const Item = ({id, nombre, tags, precio, image, stock, description}) => {

    return (

        <div className="Card">


            <h2>{nombre}</h2>
            <img src={image} alt={nombre} height={180} width={300} />
            {tags && tags.map((tag, index) => (
                    <Link to={`../${tag}`} key={index} className="TagButton">#{tag}</Link>
                    ))}


            <h4>Precio: $ {precio}</h4>
            <Link to={`/item/${id}`}>ver detalles...</Link>

            
        </div>
    )
}

export default Item;