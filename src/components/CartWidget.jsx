import React from 'react';

function CartWidget(){
  return(
      <i className='bx bx-cart-alt cursor-pointer text-2xl flex'>
        <p id="num-carro" className="font-poppins font-ligth text-center text-sm">1</p>
      </i>
  );
}

export default CartWidget;