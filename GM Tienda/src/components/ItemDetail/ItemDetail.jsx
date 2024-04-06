

import { useState, useContext } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
// import { getSamples, getSampleById } from "../../asyncMock";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";




const ItemDetail = ({tags, nombre, precio, image, description, stock }) => {

    const [quantity, setQuantity] = useState(0);

    const { setCart } = useContext(CartContext);

    const agregarContar = (contar) => {
        
        const samplesToAdd = {
            nombre, 
            precio, 
            contar
        };
        setQuantity(contar);

        setCart(prev => [...prev, samplesToAdd])

        };
    
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
            <h3>Precio: $ {precio}</h3>
            <footer>
                {quantity === 0 ? (            
                    <ItemCounter onAdd={agregarContar} stock={stock} />
                    ) : (
                    <Link to="/cart"><button>Finalizar Compra</button></Link>    
                    )
                }
            </footer>
        </article>
    );
};

export default ItemDetail