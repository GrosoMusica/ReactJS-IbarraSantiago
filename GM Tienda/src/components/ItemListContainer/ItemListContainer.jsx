

import { useState, useEffect } from "react";
// import { getSamples, getSamplesByTags } from "../../asyncMock"; 
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
// import ItemCount from "../ItemCounter/ItemCounter";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const ItemListContainer = ({ welcome }) => {
    const [samples, setSamples] = useState([]);

    const { categoryId } = useParams();




    // useEffect(() => {
    //     setTimeout(() => {
    //         setRender(prev => !prev)
    //     }, 2133)
    // })

    useEffect(() => {

        const samplesCollection = categoryId ? (
            query(collection(db, "samples"), where("tags", "==" , categoryId))
        ) : (
            collection(db, "samples")
        )

        getDocs(samplesCollection)
            .then(querySnapshot => { 
                const samplesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data};
                });

                setSamples(samplesAdapted)
            })
            .catch(() => {
                console.error("Error al cargar los datos");
                        })
    }, [categoryId])
        

        // const asyncFunction = categoryId ? getSamplesByTags : getSamples
        // asyncFunction(categoryId)
        //     .then(result => {
        //         setSamples(result)
        //     })
        //     // .catch(error => {
        //     //     console.error(error)
        //     // })
        

    return (
        <main>
            <h1>{ welcome }</h1>

            <section>
                <ItemList samples={samples}/>

                
            </section>
            
        </main>
    );
};

export default ItemListContainer;

