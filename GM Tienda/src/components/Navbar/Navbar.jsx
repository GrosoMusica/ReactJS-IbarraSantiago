import React from 'react';

import { NavLink } from 'react-router-dom';

import CartWidget from '../Cart/CartWidget';

import classes from "./Navbar.module.css"; 

const Navbar = () => {
    return (
        <aside>
            <div className={classes.logo}>
                <img src="./src/assets/logoGM.png" alt="Logo de la Tienda GM" />
                <h4>Tienda GM</h4>
            </div>
            <nav className="Tags-Menu">
                <NavLink to="/tags/Acoustic" activeClassName="activeOption" className="Option">Acoustic</NavLink>

                <NavLink to="/tags/Ambient" activeClassName="activeOption" className="Option">Ambient</NavLink>

                <NavLink to="/tags/Electric" activeClassName="activeOption" className="Option">Electric</NavLink>

                <NavLink to="/tags/LOOP" activeClassName="activeOption" className="Option">LOOP</NavLink>

                <NavLink to="/tags/Groove" activeClassName="activeOption" className="Option">Groove</NavLink>

                <NavLink to="/tags/Dancing" activeClassName="activeOption" className="Option">Dancing</NavLink>

                <NavLink to="/tags/Modern" activeClassName="activeOption" className="Option">Modern</NavLink>

                <CartWidget />
            </nav>
        </aside>
    );
};

export default Navbar;
