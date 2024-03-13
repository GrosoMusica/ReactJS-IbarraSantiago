import "ItemList.modules.css"
import Item from "../Item/Item";

const ItemList = ({ samples }) => {
    return (
    <article className="Item-list">
        {samples.map(sampl => {
        return <Item key={sampl.id} {...sampl} />; 
        })}
    </article>
    );
};

export default ItemList;
