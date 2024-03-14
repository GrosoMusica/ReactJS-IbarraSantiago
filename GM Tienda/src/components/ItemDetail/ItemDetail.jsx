
import styles from "./ItemDetail.module.css";

import ItemCounter from "../ItemCounter/ItemCounter";
import { getSamples } from "../../asyncMock";


const ItemDetail = ({ id, nombre, precio, image, description, stock }) => {

    return (
        <article className="Card">

            <h2>{id}:{nombre}</h2>
            
            <img src={image} alt={nombre} style={{width: 100}} />


            <p>{description}</p>

            <h4>Precio: $ {precio}</h4>

            <ItemCounter ini={1} stock={stock} onAdd ={(contar) => console.log("cantidad agregada")}/>

            

        </article>
    )}

export default ItemDetail