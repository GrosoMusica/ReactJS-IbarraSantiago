
import { Link } from "react-router-dom";

const Item = (nombre, tags, precio, image, stock, description) => {

    return (

        <article>
            <h3>Sample: {nombre}</h3>
            <h4>Precio: $ {precio}</h4>
            <h5>Etiquetas:{tags}</h5>
            <img src={image}/>
            <p>Disponibles {stock}</p>
            <p>{description}</p>
            <a href="#">ver detalles</a>
        </article>
    )
}

export default Item