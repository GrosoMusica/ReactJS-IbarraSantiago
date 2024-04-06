
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {

        return (
            <div>
                <h2>No seleccionaste ningún sample</h2>
                <Link to="/"><button>ver Samples</button></Link>
            </div>
        )
    }

    return (
        
        <div className="carrito" style={{ textAlign: "center" }}>

            {cart.map(prod => <CartItem key={prod.nombre} {...prod}/> )}


            <h3>Total: ${total}</h3>
            <button style={{ marginLeft: "300px" }} onClick={() => clearCart()}>Borrar Todos Los Samples Seleccionados</button>
            <Link to='/Checkout'><button>Checkout</button></Link>
        </div>
    );
}

export default CartView;
