import classes from "./Navbar.module.css"
import CartWidget from "../Cart/CartWidget"

const Navbar = () =>{
    return (
        <aside>
            <div className={classes.logo}>
                <img src="./src/assets/logoGM.png" alt="Logo de la Tienda GM" />
                <h4>Tienda GM</h4>
            </div>
            <nav>
                <a className={classes.a} href="">About</a>
                <a className={classes.a} href="">Samples</a>
                <a className={classes.a} href="">Recording</a>
                <a className={classes.a} href="">Contact</a>
            <CartWidget />
            </nav>
        </aside>
    )
}

export default Navbar