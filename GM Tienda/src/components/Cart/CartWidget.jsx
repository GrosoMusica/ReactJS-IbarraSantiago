
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to={'/Cart'}>
            <img className="cart" src="/assets/gtr.svg" alt="cart-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget