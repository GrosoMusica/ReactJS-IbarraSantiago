



import classes from "./ItemListContainer.module.css";
import { useEffect } from "react";
import { getSamples } from "../../asyncMock";






const ItemListContainer = ({ greeting }) => {

    useEffect(() => {
        getSamples()
            .then(result => {
                 setSamples(result)
            })
    })

    return (
        <main className={classes.main}>
            <h1>{greeting}</h1>
            <ItemList samples={samples}/>

            <div>
                
            </div>
        </main>
    );
}

export default ItemListContainer;
