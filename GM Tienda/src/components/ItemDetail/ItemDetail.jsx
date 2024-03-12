
import ItemCounter from "../ItemCounter/ItemCounter";
import itemCounter from  "../ItemCounter/ItemCounter";


const ItemDetail = ({ nombre, tags, precio, image, description, stock }) => {

    return (
        <article className="SampleCard">

            <img src={image} alt={nombre} style={{width: 100}} />

            <h3>Sample {nombre}</h3>

            <p>{description}</p>

            <h3>Tags: {tags}</h3>

            <h4>Precio: $ {precio}</h4>

            <ItemCounter stock={stock} />

            

        </article>
    )}

export default ItemDetail