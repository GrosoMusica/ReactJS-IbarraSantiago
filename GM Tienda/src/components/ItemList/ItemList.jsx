


const ItemList = ({ samples }) => {

    return (
        <article>
            {
                samples.map(sample => {

                    return <Item key={sample.id} {...samples}/>
                })
            }

        </article>

    )

}

export default ItemList