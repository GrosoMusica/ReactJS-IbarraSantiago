import styles from "./ItemList.module.css";

// import { getSampleById } from "../../asyncMock";
// import { useEffect, useState } from "react";
import Item from "../Item/Item";


const ItemList = ({ samples }) => {
    
    return (


    <section className="itemList">
        {samples.map(sample => (
        
        <Item key={sample.id} { ...sample } />
        )
        )}
    </section>

    );
};

export default ItemList;
