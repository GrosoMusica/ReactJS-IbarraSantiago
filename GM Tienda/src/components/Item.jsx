const Item = (nombre, tags, precio, img) => {

    return (

        <article>
            <h3>Sample: {nombre}</h3>
            <img src={img} alt={nombre} />
            {/* <p>{description}</p> */}
            <h4>Precio: $ {precio}</h4>
            <h5>Etiquetas:{tags}</h5>
            <a href="#">ver detalles</a>
        </article>
    )
}

export default Item