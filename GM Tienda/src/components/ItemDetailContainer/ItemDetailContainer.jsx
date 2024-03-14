
import styles from "./ItemDetailContainer.module.css";

import { useState, useEffect } from "react";
import { getSampleById, getSamples } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [sample, setSample] = useState([])

    const { itemId } = useParams()

    useEffect (() => {

        getSampleById (itemId)
        .then(result => {
            setSample (result)
        })
        // .catch (error => {
        //     console.error(error)
        // })
    }, [itemId]);

    return (
        <main>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...sample} />

        </main>
    )
}

export default ItemDetailContainer