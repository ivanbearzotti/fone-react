import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return(
        <>
            <div className="cont-cant flex bg-gray-200 rounded-lg justify-between items-center py-2 w-full">
                <button onClick={decrement} className="menos font-poppins font-bold text-gris border-r border-solid border-gris px-8 cursor-pointer">-</button>
                <span className="num font-poppins font-bold text-gris">{quantity}</span>
                <button onClick={increment} className="mas font-poppins font-bold text-gris border-l border-solid border-gris px-8 cursor-pointer">+</button>
            </div>
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="boton-agregar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg">Add to cart</button>
        </>
    )
}

export default ItemCount