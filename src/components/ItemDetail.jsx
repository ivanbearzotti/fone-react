import React, { useContext } from "react"
import ItemCount from "./ItemCount"
import { useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ( {item} ) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const itemAdded = item
        addItem(itemAdded, quantity)
    }

    return(
        <div id="productos" className="grid grid-cols-1 px-10 pb-10 pt-10 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4">
            <div className="card-container bg-white rounded-xl flex flex-col p-8 gap-4 drop-shadow-xl lg:transition lg:duration-300 lg:hover:scale-105">
                <div className="card-img">
                    <img src={item.img} alt={item.name} className="flex justify-center w-full lg:transition lg:duration-300 lg:hover:scale-105"/>
                </div>
                <div className="card-info">
                    <div className="name-description-price flex justify-between">
                        <div className="name-description">
                            <h3 className="font-poppins font-bold text-xl">{item.name}</h3>
                            <p className="font-poppins font-normal text-gris">{item.type}</p>
                        </div>
                        <div className="price">
                            <p className="font-poppins font-bold text-xl">${item.price}</p>
                        </div>
                    </div>
                </div>
                <p>The {item.name} is a no compromise freestyle machine designed for winners; it’s even in the name: Win The Freestyle!</p>
                {
                    quantityAdded > 0 ? 
                    <Link to="/cart"><button className="boton-agregar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg">Finalize purchase</button></Link>
                    :
                    <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail
