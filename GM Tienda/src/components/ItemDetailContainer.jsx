import { useState, useEffect } from "react"
import { getSamples } from "../../src/asyncMock"
import ItemDetail from "./ItemDetail/ItemDetail";



const ItemDetailContainer = () => {

    const [sample, setSample] = useState(null)

    useEffect (() => {

        getSampleByID ("2")
        .then(result => {
            setSample (result)
        })
    }, []);

    return (
        <main>
            <h1>Detalles del Producto</h1>
            <ItemDetail {...(sample && sample)} />
        </main>
    )
}

export default ItemDetailContainer