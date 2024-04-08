import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({ image, nombre, precio, quantity, total }) => {
    const { removeItem } = useContext(CartContext);

    const quitar = () => {
        removeItem(nombre);
    };

    return (
        <div className="CartItemContainer"> 
            <article className="CartItem">
                <div>
                    <img src={image} alt={nombre} className="CartItemImage" />
                </div>
                <div className="CartItemDetails">
                    <h3>{nombre}</h3>
                    <h4>Precio: $ {precio}</h4>
                    <h4>Cantidad: {quantity}</h4>
                    <button onClick={() => quitar()}>X</button>
                </div>
            </article>
        </div>
    );
};

export default CartItem;

