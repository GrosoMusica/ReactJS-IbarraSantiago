import { useEffect } from "react";
import { getSamples } from "../../asyncMock";


import classes from "./ItemListContainer.module.css";

import ItemList from "../ItemList/ItemList";



const ItemListContainer = (props) => {

    useEffect(() => {
        getSamples()
            .then(result => {
                setSamples(result)
            })
    })

    return (
        <main className={classes.main}>
            <h1>{props.saludar}</h1>
            <div>
                <ItemList />
                
            </div>
        </main>
    );
}

export default ItemListContainer;
