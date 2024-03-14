
import CartWidget from '../Cart/CartWidget';

import classes from "./Navbar.module.css"; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div>
                <img src="./src/assets/logoGM.png" alt="Logo de la Tienda GM" width= "90px"/>
                <h2>Tienda GM</h2>
            </div>
            <nav >
                <NavLink to='/Acoustic/' >Acoustic</NavLink>

                <NavLink to='/Ambient/' >Ambient</NavLink>

                <NavLink to="/Electric/" >Electric</NavLink>

                <NavLink to="/LOOP/" >LOOP</NavLink>

                <NavLink to="/Groove/" >Groove</NavLink>

                <NavLink to="/Dancing/" >Dancing</NavLink>

                <NavLink to="/Modern/" >Modern</NavLink> 
            </nav>
                <CartWidget /> 
        </header>
    );
};

export default Navbar;
