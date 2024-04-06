
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";

import { where, collection, query, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";


const Checkout = (userData) => {

    const { cart, total } = useContext(CartContext);

    const createPedido = async (userData) => {

        try {
            const objPedido = {
                comprador: {
                    nombre: "Santiago Ibarra"
                    email: "grosomusica@gmail.com"
                    whatsapp: 1135743407
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const agotado = []
            const ids = cart.map(prod = prod.id);
    
            const samplesCollection = query(collection(db, 'samples'), where(documentId(), 'in', ids));
            
            const querySnapshot = await getDocs(samplesCollection);
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
    
                const data = doc.data()
                const remanente = data.stock
    
                const sampleAdded = cart.find(prod => prod.id === doc.id)
                const cantidadSampleAdded
    
                if(remanente >= cantidadSampleAdded) {
                    batch.update(doc.ref, { stock: remanente - cantidadSampleAdded})
                } else {
                    agotado.push({ id: doc.id, ...data})
                }
            })
    
            if (agotado.length === 0 ) {
                batch.commit()
    
                const pedidosCollection = collection(db, "pedidos")
                const { id } = await addDoc(pedidoCollection, objPedido)
    
            } else {
                console.error("hay cantidades no disponibles por el momento")

        } catch (error) {
            console.error("no hay sistema!!")

        } finally {}       

    }}

    return (
        <div>
            <h1>Checkout</h1>
            <h3>Formulario</h3>
            <button onClick={{createPedido}}>HACER PEDIDO</button>
        </div>
    )
}

export default Checkout