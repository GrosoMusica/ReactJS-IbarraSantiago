import styles from "./ItemList.module.css";

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
