import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {

    
    
    return(
        <>
            <div className="cart-menu w-full h-full px-6 pt-6 gap-8 bg-white">
                <div class="checkout pb-4 border-b border-solid border-gris">
                        <p class="font-roboto font-bold text-xl text-center">CHECK OUT</p>
                </div>
                <form className="flex flex-col gap-2" action="">
                    <p className="shipping-info font-roboto font-bold pt-4 pb-2">1. SHIPPING INFORMATION</p>
                        <label className="font-poppins font-normal text-gris" for="">First name: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Last name: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Street Address: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Apartment/Unit/Suite</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text"></input>
                        <label className="font-poppins font-normal text-gris" for="">Zip Code: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" required></input>
                        <label className="font-poppins font-normal text-gris" for="">City: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" required></input>
                        <label className="font-poppins font-normal text-gris" for="">State: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" required></input>
                        <label className="font-poppins font-normal text-gris" for="">E-mail: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="email" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Phone: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" required></input>
                    <p className="shipping-info font-roboto font-bold pt-4 pb-2">2. PAYMENT INFORMATION</p>
                        <label className="font-poppins font-normal text-gris" for="">Card number: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Expiration month: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Expiration year: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" required></input>
                        <label className="font-poppins font-normal text-gris" for="">Security code: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" required></input>
                    <Link to="/"><button type="submit" id="boton-buynow" className="font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg mt-4 mb-8">Buy now</button></Link>
                </form>
            </div>
        </>
    )
}

export default CheckOut