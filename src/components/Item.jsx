import React from "react";
import { Link } from "react-router-dom";

const Item = ( {producto} ) => {
    return(
        <div className="card-container bg-white rounded-xl flex flex-col p-8 gap-4 drop-shadow-xl lg:transition lg:duration-300 lg:hover:scale-105">
            <div className="card-img">
                <img src={`/assets/img/${producto.img}`} alt={producto.name} className="flex justify-center w-full lg:transition lg:duration-300 lg:hover:scale-105"/>
            </div>
            <div className="card-info">
                <div className="name-description-price flex justify-between">
                    <div className="name-description">
                        <h3 className="font-poppins font-bold text-xl">{producto.name}</h3>
                        <p className="font-poppins font-normal text-gris">{producto.type}</p>
                    </div>
                    <div className="price">
                        <p className="font-poppins font-bold text-xl">${producto.price}</p>
                    </div>
                </div>
            </div>
            <Link to={`/item/${producto.id}`} className="boton-agregar font-poppins font-bold text-white text-center text-m bg-gris w-full px-4 py-2 rounded-lg">See more</Link>
        </div>
    )
}

export default Item