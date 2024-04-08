
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart, clearCart, removeItem, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {

        return (
            <div style={{ textAlign: "center" }}>
                <h3>No seleccionaste ningún sample</h3>
                <Link to="/"><button>ver Samples</button></Link>
            </div>
        )
    }

    return (
        
        <div className="carrito" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {cart.map(prod => <CartItem key={prod.nombre} {...prod}/> )}
            
            

        </div>

            <h3>Total: ${total}</h3>
            <button style={{ marginLeft: "300px" }} onClick={() => clearCart()}>Borrar Todos Los Samples Seleccionados</button>
            <Link to='/Checkout'><button>Ir al Checkout</button></Link>
        </div>
    );
}

export default CartView;
