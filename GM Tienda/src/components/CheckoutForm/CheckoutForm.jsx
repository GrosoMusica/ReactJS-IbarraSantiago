import React, { useState, useEffect } from "react";
import styles from "./CheckoutForm.module.css";


const CheckoutForm = ({ onConfirm }) => {
    const [cliente, setCliente] = useState('');
    const [email, setEmail] = useState('');
    const [emailRepetido, setEmailRepetido] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [camposCompletos, setCamposCompletos] = useState(false);
    const [emailCoincide, setEmailCoincide] = useState(true);

    useEffect(() => {
        setCamposCompletos(cliente.trim() !== '' && email.trim() !== '' && whatsapp.trim() !== '');
    }, [cliente, email, whatsapp]);

    const confirmButton = (event) => {
        event.preventDefault();

        const compradorData = {
            cliente, email, whatsapp
        };

        onConfirm(compradorData);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (emailRepetido.trim() !== '') {
            setEmailCoincide(event.target.value === emailRepetido);
        }
    };

    const handleEmailRepetidoChange = (event) => {
        setEmailRepetido(event.target.value);
        setEmailCoincide(event.target.value === email);
    };

    return (
        <section className={styles.checkoutForm}>
            <form onSubmit={confirmButton} className={styles.form}>
                <label>
                    Nombre
                    <input type="text" value={cliente} onChange={({ target }) => setCliente(target.value)} className={styles.input} />
                </label>
                <label>
                    Email
                    <input type="text" value={email} onChange={handleEmailChange} className={`${styles.input} ${!emailCoincide ? styles.error : ''}`} />
                </label>
                {!emailCoincide && <span className={styles.errorMessage}>¡<strong>El email no coincide!</strong></span>}
                <label>
                    Repite tu email
                    <input type="text" value={emailRepetido} onChange={handleEmailRepetidoChange} className={`${styles.input} ${!emailCoincide ? styles.error : ''}`} />
                </label>
                <label>
                    WhatsApp
                    <input type="text" value={whatsapp} onChange={({ target }) => setWhatsapp(target.value)} className={styles.input} />
                </label>
                <div className={styles.submitButton}>
                    <button type="submit" disabled={!camposCompletos || !emailCoincide}>HACER PEDIDO</button>
                </div>
            </form>
        </section>
    );
};

export default CheckoutForm;
