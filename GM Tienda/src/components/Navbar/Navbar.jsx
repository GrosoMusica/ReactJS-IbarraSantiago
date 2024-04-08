
import CartWidget from '../Cart/CartWidget';

import classes from "./Navbar.module.css"; 
import { Link, NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';


const Navbar = () => {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const samplesCollection = collection(db, "samples");
                const querySnapshot = await getDocs(samplesCollection);
                const uniqueTags = new Set();

                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.tags) {
                        data.tags.forEach(tag => uniqueTags.add(tag));
                    }
                });

                setTags(Array.from(uniqueTags));
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            }
        };

        fetchTags();
    }, []);

    return (
        <header>
            <div>
                <Link to='/'><img src="/assets/logoGM.png" alt="Logo de la Tienda GM" width= "90px"/></Link>
                <h2>Tienda GM</h2>
            </div>
            <nav>
            {tags.map(tag => (
                <NavLink key={tag} to={`/${tag}`}>
                    {tag}
                </NavLink>
            ))}
        </nav>
                <CartWidget /> 
        </header>
    );
};

export default Navbar;
