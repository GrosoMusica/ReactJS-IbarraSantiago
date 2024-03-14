
import CartWidget from '../Cart/CartWidget';

import classes from "./Navbar.module.css"; 

const Navbar = () => {
    return (
        <header>
            <div>
                <img src="./src/assets/logoGM.png" alt="Logo de la Tienda GM" width= "90px"/>
                <h4>Tienda GM</h4>
            </div>
            <nav >

                <a href="#">Acoustic</a>
                <a href="#">Guitar</a>
                <a href="#">Electric</a>
                <a href="#">Ambient</a>
                <a href="#">LOOP</a>
                <a href="#">Groove</a>
                <a href="#">Modern</a>
                <a href="#">Dancing</a>
{/*                 
                <NavLink to="/tags/Acoustic" activeClassName="activeOption" className="Option">Acoustic</NavLink>

                <NavLink to="/tags/Ambient" activeClassName="activeOption" className="Option">Ambient</NavLink>

                <NavLink to="/tags/Electric" activeClassName="activeOption" className="Option">Electric</NavLink>

                <NavLink to="/tags/LOOP" activeClassName="activeOption" className="Option">LOOP</NavLink>

                <NavLink to="/tags/Groove" activeClassName="activeOption" className="Option">Groove</NavLink>

                <NavLink to="/tags/Dancing" activeClassName="activeOption" className="Option">Dancing</NavLink>

                <NavLink to="/tags/Modern" activeClassName="activeOption" className="Option">Modern</NavLink> */}

            </nav>
                <CartWidget /> 
        </header>
    );
};

export default Navbar;
