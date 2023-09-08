import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from "./CartItem";

function CartContainer() {

    const { cart, clearCart, subtotal } = useContext(CartContext);

    if(cart.length == 0){
        return (
            <div className="cart-menu w-full h-full px-6 pt-6 gap-8 bg-white">
                <div className="shopping-cart pb-4 border-b border-solid border-gris">
                    <p className="font-roboto font-bold text-xl text-center">SHOPPING CART</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-poppins font-ligth text-center p-4">Your shopping cart is empty.</p>
                </div>
            </div>
        )
    }

    return(
        <div className="cart-menu w-full h-full px-6 pt-6 gap-8 bg-white">
            <div className="shopping-cart pb-4 border-b border-solid border-gris">
                <p className="font-roboto font-bold text-xl text-center">SHOPPING CART</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-16">
                { cart.map(p => <CartItem key={p.id} p={p} />) }
            </div>
            <div className="shopping-cart w-full pt-4 mt-8 border-t border-solid border-gris flex flex-col gap-2">
                <div className="flex justify-between">
                    <p className="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                    <p className="price font-poppins font-bold">${subtotal}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                    <p className="price font-poppins font-bold">${(subtotal*0.07).toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                    <p className="price font-poppins font-bold">$0</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                    <p className="price font-poppins font-bold text-xl">${(subtotal*1.07).toFixed(2)}</p>
                </div>
            </div>
            <button onClick={() => clearCart()} className="boton-comprar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg mt-4 mb-8">Clean cart</button>
            <Link to="/checkout"><button className="boton-comprar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg mt-4 mb-8">Check out</button></Link>
        </div>
    )
}

export default CartContainer