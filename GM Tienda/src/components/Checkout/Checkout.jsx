import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

import { where, collection, query, documentId, getDocs, writeBatch, addDoc, Timestamp } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [pedidoId, setPedidoId] = useState(null);

    const { cart, total, clearCart } = useContext(CartContext);

    const createPedido = async ({ cliente, email, whatsapp }) => {

        setLoading(true); 
        try {
            const objPedido = {
                comprador: {
                    cliente, email, whatsapp
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const agotado = [];
            
            const nombreSamples = cart.map(prod => prod.nombre); // Obtener los nombres de los samples del carrito
            const samplesCollection = query(collection(db, 'samples'), where('nombre', 'in', nombreSamples));
            const querySnapshot = await getDocs(samplesCollection);
            const { docs } = querySnapshot;

            docs.forEach(doc => {
                const data = doc.data();
                const remanente = data.stock;
                const sampleAdded = cart.find(prod => prod.id === doc.id);
                const cantidadSampleAdded = sampleAdded?.quantity || 1; 


                if (remanente >= cantidadSampleAdded) {
                    batch.update(doc.ref, { stock: remanente - cantidadSampleAdded });
                } else {
                    agotado.push({ id: doc.id, ...data });
                }
            });

            if (agotado.length === 0) {
                batch.commit();

                const pedidosCollection = collection(db, "pedidos");
                const { id } = await addDoc(pedidosCollection, objPedido);
                setPedidoId(id);
            } else {
                console.error("Hay cantidades no disponibles por el momento");
                console.log("Productos agotados:", agotado);
            }
        } catch (error) {
            console.error("No hay sistema:", error);
        } finally {

            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Pedido en Proceso...</h1>;
    }

    if (pedidoId) {
        return <h1>Tu Número de Pedido es {pedidoId}</h1>;
    }

    return (
        <div className="checkout-container">

            <div className="listado-compras">
                <h2 style={{ color: 'darkviolet' }}>Productos en el carrito:</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <p>{item.nombre} - Cantidad: {item.quantity} - Precio: ${item.precio}</p>
                        </li>
                    ))}
                </ul>
                <h2 style={{ color: 'darkviolet' }}>${total}</h2>
            </div>
            <div className="formulario">
                <CheckoutForm onConfirm={createPedido} />
            </div>
        </div>

    );
};

export default Checkout;
