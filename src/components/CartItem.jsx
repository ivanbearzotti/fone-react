import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({p}) => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <>
            <div className="cart-card flex gap-4 justify-between bg-white p-4 mt-4 rounded-xl drop-shadow-xl">
                <div className="cart-card-img flex items-center">
                    <img src={`../../public/assets/img/${p.img}`} alt="" className="h-32"></img>
                </div>
                <div className="card-card-info flex flex-col gap-2">
                    <div className="name-type-delete flex gap-10">
                        <div className="name-type flex flex-col">
                            <h3 className="font-poppins font-bold">{p.name}</h3>
                            <p className="font-poppins font-normal text-gris text-sm">{p.type}</p>
                        </div>
                        <button onClick={() => removeItem(p, p.quantity)} className="bg-gray-200 py-1 px-2 rounded"><i className='bx bx-trash text-2xl text-gris'></i></button>
                    </div>
                    <div className="unit-price-total">
                        <div className="unit-price flex items-center justify-between">
                            <p className="unit-p font-poppins font-normal text-gris text-sm">Unit price:</p>
                            <p className="price font-poppins font-bold">${p.price}</p>
                        </div>
                        <div className="quantity flex items-center justify-between">
                            <p className="unit-p font-poppins font-normal text-gris text-sm">Quantity:</p>
                            <p className="price font-poppins font-bold">{p.quantity}</p>
                        </div>
                        <div className="total-price flex items-center justify-between">
                            <p className="total-p font-poppins font-normal text-gris text-sm">Total:</p>
                            <p className="price font-poppins font-bold">${(p.price)*(p.quantity)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartItem