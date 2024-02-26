
import classes from "./ItemListContainer.module.css"

function ItemListContainer({ greeting }) {
    return (
        <div className={classes.main}>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer