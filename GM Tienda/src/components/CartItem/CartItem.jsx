




const CartItem = ({ image, nombre, precio, quantity, total }) => {



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
                </div>
            </article>
        </div>


    )
}

export default CartItem;
