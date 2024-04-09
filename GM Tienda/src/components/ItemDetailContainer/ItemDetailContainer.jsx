
import styles from "./ItemDetailContainer.module.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase";



const ItemDetailContainer = () => {

    const [sample, setSample] = useState([])

    const { itemId } = useParams()

    useEffect (() => {

        const sampleDoc = doc(db, "samples", itemId)

        getDoc(sampleDoc)
        .then(queryDocumentSnapshot => {
            const data = queryDocumentSnapshot.data()
            const sampleAdapted = { id: queryDocumentSnapshot.id, ...data}

            setSample(sampleAdapted)
        })
        .catch()


    }, [itemId]);

    return (
        <main>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...sample} />

        </main>
    )
}

export default ItemDetailContainer