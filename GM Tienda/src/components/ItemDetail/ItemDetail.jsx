
import { useState, useContext } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import { useNotificationCenter } from "react-toastify/addons/use-notification-center";



const ItemDetail = ({tags, nombre, precio, image, description, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const { showNotification } = useNotificationCenter()

    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            nombre, precio, image
        };

        addItem(item, quantity)
        showNotification("error", "hay un prolema para cargar")

    }

    return (
        <article className="ItemDetail">
            <img src={image} alt={nombre} />
            <h3 className="TagContainer">
            {tags && tags.map((tag, index) => (
                <Link to={`../${tag}`} key={index} className="TagButton">#{tag}</Link>
))}
            </h3>
            <h1>{nombre}</h1>
            <p>{description}</p>
            <h3>Precio: $ {precio}</h3>
            <footer>
                {quantityAdded > 0 ? (            
                    <Link to="/cart"><button>Finalizar Compra</button></Link>    
                ) : (
                    <ItemCounter onAdd={handleOnAdd} stock={stock} />
                    )
                }
                <Link to="/"><button>Seguir navegando</button></Link>    

            </footer>
        </article>
    );
};

export default ItemDetail