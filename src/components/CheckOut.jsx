import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckOut = () => {

    const { cart, clearCart} = useContext(CartContext);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        address: '',
        apartment: '',
        zip: '',
        city: '',
        state: '',
        email: '',
        phone: '',
        cardnumber: '',
        expiration: '',
        expirationm: '',
        expirationy: '',
        security: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.fname && formData.lname && formData.address && formData.apartment && formData.zip && formData.city && formData.state && formData.email && formData.phone && formData.cardnumber && formData.expirationm && formData.expirationy && formData.security) {
            console.log('Formulario enviado:', formData);
        } else {
            alert('Por favor, completa todos los campos');
        }
    };
    
    return(
        <>
            <div className="cart-menu w-full h-full px-6 pt-6 gap-8 bg-white">
                <div className="checkout pb-4 border-b border-solid border-gris">
                        <p className="font-roboto font-bold text-xl text-center">CHECK OUT</p>
                </div>
                <form className="flex flex-col gap-2" action="" onSubmit={handleSubmit}>
                    <p className="shipping-info font-roboto font-bold pt-4 pb-2">1. SHIPPING INFORMATION</p>
                        <label className="font-poppins font-normal text-gris" htmlFor="fname">First name: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="lname">Last name: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="address">Street Address: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="apartment">Apartment/Unit/Suite</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="apartment" name="apartment" value={formData.apartment} onChange={handleChange}></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="zip">Zip Code: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="city">City: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="city" name="city" value={formData.city} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="state">State: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="text" id="state" name="state" value={formData.state} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="email">E-mail: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="phone">Phone: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} required></input>
                    <p className="shipping-info font-roboto font-bold pt-4 pb-2">2. PAYMENT INFORMATION</p>
                        <label className="font-poppins font-normal text-gris" htmlFor="cardnumber">Card number: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" id="cardnumber" name="cardnumber" value={formData.cardnumber} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="expirationm">Expiration month: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" id="expirationm" name="expirationm" value={formData.expirationm} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="expirationy">Expiration year: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" id="expirationy" name="expirationy" value={formData.expirationy} onChange={handleChange} required></input>
                        <label className="font-poppins font-normal text-gris" htmlFor="security">Security code: *</label>
                        <input className="border border-solid border-gris rounded py-1 px-2" type="number" id="security" name="security" value={formData.security} onChange={handleChange} required></input>
                    <Link to="/"><button onClick={() => clearCart()} type="submit" id="boton-buynow" className="font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg mt-4 mb-8">Buy now</button></Link>
                </form>
            </div>
        </>
    )
}

export default CheckOut