
import "ItemDetail.css";

import ItemCounter from "../ItemCounter/ItemCounter";
import itemCounter from  "../ItemCounter/ItemCounter";
import { getSamples } from "../../asyncMock";


const ItemDetail = ({ id, nombre, tags, precio, image, description, stock }) => {

    return (
        <article className="Card">

            <h2>{id}:{nombre}</h2>
            
            <img src={image} alt={nombre} style={{width: 100}} />


            <p>{description}</p>

            <h3>Tags: {tags}</h3>

            <h4>Precio: $ {precio}</h4>

            <ItemCounter ini={1} stock={stock} onAdd ={(cantidad) => console.log("cantidad agregada")}/>

            

        </article>
    )}

export default ItemDetail