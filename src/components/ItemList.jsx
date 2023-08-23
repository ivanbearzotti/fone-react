import React from "react";
import Item from './Item';
import { Link, useParams } from "react-router-dom";

const ItemList = ( {productos} ) => {

    return(
        <>
            <div id="productos" className="grid grid-cols-1 px-10 pb-10 pt-10 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4">
                {productos.map( (producto) => <Item producto={producto} key={producto.id} />)}
            </div>
        </>
    )
}

export default ItemList