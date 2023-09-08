import React, { useState } from "react"
import { useEffect } from "react";
import { pedirItemPorId } from "../functions/pedirProductos";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "products", id)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const itemAdapted = {...data}
                console.log(data)
                setItem(itemAdapted)
            })
            .catch(error => {
                console.log(error)
            })

        // pedirItemPorId(Number(id))
        //     .then(res => {
        //         setItem(res);
        //     })
    }, [id])
    
    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer