
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartView = () => {

    const { cart } = useContext(CartContext);

    return (
        <div className="carrito">
            <h1>Tus Samples</h1>
            <section>

            {
                cart.map(prod => {
                    return (
                        <article key={prod.id}>
                            <h2>{prod.nombre}</h2>

                        </article>
                    )
                    
                })
            }
            </section>
            <Link to='/Checkout'></Link>
        </div>
    )
}

export default CartView