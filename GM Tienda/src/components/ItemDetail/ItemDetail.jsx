

import ItemCounter from "../ItemCounter/ItemCounter";
import { getSamples } from "../../asyncMock";


const ItemDetail = ({ id, tags, nombre, precio, image, description, stock }) => {


    console.log('Stock:', stock);

    return (
        <article className="ItemDetail">

            <img src={image} alt={nombre} />

            <h3 className="TagContainer">
    {tags && tags.map((tag, index) => (
        <span className="TagButton" key={index}>#{tag}{index < tags.length - 1 && '  '}</span>
    ))}
</h3>


            <h1>{nombre}</h1>
            
            <p>{description}</p>

            <h3>Precio: $ {precio}</h3  >


            

            <ItemCounter ini={1} stock={7} onAdd ={(contar) => console.log("cantidad agregada")}/>

        </article>
    )}

export default ItemDetail