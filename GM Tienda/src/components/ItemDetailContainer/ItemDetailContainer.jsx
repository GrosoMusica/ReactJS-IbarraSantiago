
import "ItemDetailContainer.module.css"

import { useState, useEffect } from "react";
import { getSampleById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-dom";


const ItemDetailContainer = () => {

    const [sample, setSample] = useState(null)

    const { itemId } = useParams()

    useEffect (() => {

        getSampleById (itemId)
        .then(response => {
            setSample (response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [temId]);

    return (
        <main className="Item-Details" >
            <h1>Detalles del Producto</h1>
            <ItemDetail {...samples} />
        </main>
    )
}

export default ItemDetailContainer