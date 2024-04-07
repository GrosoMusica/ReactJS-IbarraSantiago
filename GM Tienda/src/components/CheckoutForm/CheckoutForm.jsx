
import { useState } from "react";
import styles from "./CheckoutForm.module.css";
import { CartContext } from "../../context/CartContext";




const CheckoutForm = ({ onConfirm }) => {

    const [cliente, setCliente] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [whatsapp, setWhatsapp] = useState(' ')

    const confirmButton = (event) => {
        event.preventDefault()

        const compradorData = {
            cliente, email, whatsapp
        }

        onConfirm(compradorData)
    }

    return (

        <section className="dos-columnas">

            <form onSubmit={confirmButton}>
                <label>
                    Nombre
                    <input type="text" value={cliente} onChange={({ target }) => setCliente(target.value)} />
                </label>
                <label>
                    Email
                    <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <label>
                    WhatsApp
                    <input type="text" value={whatsapp} onChange={({ target }) => setWhatsapp(target.value)} />
                </label>
                <div className="submitButton">
                    <button type="submit">HACER PEDIDO</button>
                </div>
            </form>
        </section>
    );
};


export default CheckoutForm;