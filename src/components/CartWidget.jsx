import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from "../context/CartContext"

function CartWidget(){

  const { cart } = useContext(CartContext);

  return(
    <Link to="/cart"><i className='bx bx-cart-alt cursor-pointer text-2xl flex'><p id="num-carro" className="font-poppins font-ligth text-center text-sm">{cart.length}</p></i></Link>
  );
}

export default CartWidget;