

import ItemCounter from "../ItemCounter/ItemCounter";
import { getSamples } from "../../asyncMock";


const ItemDetail = ({ id, tags, nombre, precio, image, description, stock }) => {


    console.log('Stock:', stock);

    return (
        <article>

            <img src={image} alt={nombre} />

            <h3>{nombre}</h3>
            


            <p>{description}</p>

            <h2>Precio: $ {precio}</h2>

            <ItemCounter ini={1} stock={8} onAdd ={(contar) => console.log("cantidad agregada")}/>

            <h3>#{tags}</h3>

        </article>
    )}

export default ItemDetail