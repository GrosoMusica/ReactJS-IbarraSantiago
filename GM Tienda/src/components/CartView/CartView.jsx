import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="carrito">
            <h1>Tus Samples</h1>
            <section>
                {cart.map((prod, index) => (
                    <article key={index}>
                        <h2>{prod.nombre}</h2>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Precio unitario: ${prod.precio}</p>
                        <p>Total: ${prod.quantity * prod.precio}</p>
                    </article>
                ))}
            </section>
            <Link to='/Checkout'><button>Checkout</button></Link>
        </div>
    );
}

export default CartView;
