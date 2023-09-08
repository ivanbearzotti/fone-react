import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){

  return(
    <nav className='sticky top-0 z-20 flex flex-col'>
      <div className="sticky top-0 z-40 h-20 w-full px-6 flex items-center justify-between bg-white border-b border-solid border-border lg:px-8">
        <i className='bx bx-menu cursor-pointer text-2xl lg:hidden'></i>
        <i className='bx bx-x bx-x-1 cursor-pointer text-2xl hidden'></i>
        <Link to="/">
          <img src="assets/img/logo2.png" alt="" className="w-auto h-5"></img>
        </Link>
        <div className="hidden lg:flex">
          <ul className="lg:flex lg:gap-14">
            <li className=""><Link to="/products/freeride" className="font-roboto text-black text-sm font-semibold tracking-widest">FREERIDE</Link></li>
            <li className=""><Link to="/products/freestyle" className="font-roboto text-black text-sm font-semibold tracking-widest">FREESTYLE</Link></li>
            <li className=""><Link to="/products/bigair" className="font-roboto text-black text-sm font-semibold tracking-widest">BIG AIR</Link></li>
            <li className=""><Link to="/products/wave" className="font-roboto text-black text-sm font-semibold  tracking-widest">WAVE</Link></li>
          </ul>
        </div>
        <CartWidget />
        <i className='bx bx-x bx-x-2 cursor-pointer text-2xl hidden'></i>
      </div>
      <div className="mobile-menu w-full h-full px-6 pt-16 hidden items-center justify-between z-30 bg-white">
        <div className="flex justify-center">
          <ul className="flex flex-col items-center gap-8">
            <li className=""><Link to="/products/freeride" className="font-poppins font-semibold text-black">FREERIDE</Link></li>
            <li className=""><Link to="/products/freestyle" className="font-poppins font-semibold text-black">FREESTYLE</Link></li>
            <li className=""><Link to="/products/bigair" className="font-poppins font-semibold text-black">BIG AIR</Link></li>
            <li className=""><Link to="/products/wave" className="font-poppins font-semibold text-black">WAVE</Link></li>
          </ul>
        </div>
        <div className="footer1 flex flex-col justify-center items-center gap-2 pt-20">
          <span className="font-poppins font-semibold text-black">JOIN THE F-ONE COMMUNITTY</span>
          <div className="social flex gap-4">
            <i className='bx bxl-facebook text-black text-4xl'></i>
            <i className='bx bxl-instagram text-black text-4xl'></i>
            <i className='bx bxl-youtube text-black text-4xl'></i>
            <i className='bx bxl-vimeo text-black text-4xl'></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
