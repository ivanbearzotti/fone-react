import React, { useState } from "react"
import { useEffect } from "react";
import { pedirItemPorId } from "../functions/pedirProductos";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then(res => {
                setItem(res);
            })
    }, [id])
    
    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer