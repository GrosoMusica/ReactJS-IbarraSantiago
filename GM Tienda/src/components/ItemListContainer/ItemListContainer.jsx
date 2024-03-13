import { useState, useEffect } from "react";
import { getSamples, getSampleByTags, getSampleById } from "../../asyncMock";
import "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
// import ItemCounter from "../ItemCounter/ItemCounter";
import useParams from "react-router-dom";

const ItemListContainer = (props) => {
    const [samples, setSamples] = useState([]);

    const {tagsId } = useParams()

    useEffect(() => {

        const asyncFunc = tagsId ? getSampleById : getSamples
        
        asyncFunc(tagsId) 
            
            .then(response => {
                setSamples(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [tagsId]);

    return (
        <main className={classes.main}>
            <h1>{props.saludar}</h1>
            
                <ItemList samples={samples} />
                <ItemCounter ini={1} stock={4} onAdd={} />
            
        </main>
    );
};

export default ItemListContainer;

