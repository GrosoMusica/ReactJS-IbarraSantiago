import { useState, useEffect } from "react";
import { getSamples, getSamplesByTags } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
// import ItemCount from "../ItemCounter/ItemCounter";

const ItemListContainer = ({ welcome }) => {
    const [samples, setSamples] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {

        const asyncFunction = categoryId ? getSamplesByTags : getSamples
        asyncFunction(categoryId)
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
            
        </main>
    );
};

export default ItemListContainer;

