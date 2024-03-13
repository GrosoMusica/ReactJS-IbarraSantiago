import "Item.module.css"
// import { Link } from "react-router-dom";

import { getSamples } from "../../asyncMock";
import { Link } from "react-router-dom";


const Item = (nombre, tags, precio, image, stock, description) => {

    return (

        <article className="Card">
            <h2>Sample: {nombre}</h2>
            <h4>Precio: $ {precio}</h4>
            <h3>Etiquetas:{tags}</h3>
            <img className="thumb" src={image}/>

            <p className="description">{description}</p>

            <Link to={'/item/${id}'} />ver detalles
        </article>
    )
}

export default Item