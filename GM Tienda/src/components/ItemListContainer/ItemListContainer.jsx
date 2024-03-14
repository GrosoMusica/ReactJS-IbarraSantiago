import { useState, useEffect } from "react";
import { getSamples } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import ItemCount from "../ItemCounter/ItemCounter";
// import ItemCount from "../ItemCounter/ItemCounter";
// import useParams from "react-router-dom";

const ItemListContainer = ({ welcome }) => {
    const [samples, setSamples] = useState([]);

    useEffect(() => {

        getSamples()
            .then(result => {
                setSamples(result)
            })
            // .catch(error => {
            //     console.error(error)
            // })
        })

    return (
        <main>
            <h1>{ welcome }</h1>

            <section>
                <ItemList samples={samples}/>
            </section>
            <ItemCount stock={11}/>
            
        </main>
    );
};

export default ItemListContainer;

