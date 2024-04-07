
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const ItemListContainer = ({ welcome }) => {
    const [samples, setSamples] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
    let samplesCollection = collection(db, "samples");

    if (categoryId) {
        samplesCollection = query(samplesCollection, where("tags", "array-contains", categoryId));
    }

    getDocs(samplesCollection)
        .then(querySnapshot => {
            const samplesAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });

            setSamples(samplesAdapted);
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
}, [categoryId]);

    return (
        <main>
            <h1>{ categoryId || "Bienvenido a Tienda GM" }</h1>

            <section>
                <ItemList samples={samples}/>

                
            </section>
            
        </main>
    );
};

export default ItemListContainer;

