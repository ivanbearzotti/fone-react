import React from "react";
import Item from './Item';
import { Link, useParams } from "react-router-dom";

const ItemList = ( {productos} ) => {

    return(
        <>
            <div id="productos" className="grid grid-cols-1 px-10 pb-10 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4">
                <Link to="/freeride" className="boton-agregar font-poppins font-bold text-white text-center text-m bg-gris w-full px-4 py-2 rounded-lg">Freeride</Link>
                <Link to="/freestyle" className="boton-agregar font-poppins font-bold text-white text-center text-m bg-gris w-full px-4 py-2 rounded-lg">Freestyle</Link>
                <Link to="/bigair" className="boton-agregar font-poppins font-bold text-white text-center text-m bg-gris w-full px-4 py-2 rounded-lg">Big Air</Link>
                <Link to="/wave" className="boton-agregar font-poppins font-bold text-white text-center text-m bg-gris w-full px-4 py-2 rounded-lg">Wave</Link>

                {productos.map( (producto) => <Item producto={producto} key={producto.id} />)}

            </div>
        </>
    )
}

export default ItemList