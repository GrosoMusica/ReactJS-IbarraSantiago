// import styles from "./ItemList.modules.css";
import Item from "../Item/Item";

const ItemList = ({ samples }) => {
    return (
    <section>
        {samples.map(sample => {
        return <p key={sample.id}>{sample.nombre}</p>
        ; 
        

        
        })}
    </section>

    );
};

export default ItemList;
