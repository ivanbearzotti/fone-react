import React from 'react';
import CartWidget from './CartWidget';

function NavBar(){
  return(
    <nav className='sticky top-0 z-20 flex flex-col'>
      <div className="sticky top-0 z-40 h-20 w-full px-6 flex items-center justify-between bg-white border-b border-solid border-border lg:px-8">
        <i className='bx bx-menu cursor-pointer text-2xl lg:hidden'></i>
        <i className='bx bx-x bx-x-1 cursor-pointer text-2xl hidden'></i>
        <a href="index.html">
          <img src="assets/img/logo2.png" alt="" className="w-auto h-5"></img>
        </a>
        <div className="hidden lg:flex">
          <ul className="lg:flex lg:gap-14">
            <li className=""><a href="" className="font-roboto text-black text-sm font-semibold tracking-widest">KITESURF</a></li>
            <li className=""><a href="" className="font-roboto text-black text-sm font-semibold tracking-widest">FOIL</a></li>
            <li className=""><a href="" className="font-roboto text-black text-sm font-semibold tracking-widest">SURF FOIL</a></li>
            <li className=""><a href="" className="font-roboto text-black text-sm font-semibold  tracking-widest">WING FOIL</a></li>
          </ul>
        </div>
        <CartWidget/>
        <i className='bx bx-x bx-x-2 cursor-pointer text-2xl hidden'></i>
      </div>
      <div className="mobile-menu w-full h-full px-6 pt-16 hidden items-center justify-between z-30 bg-white">
        <div className="flex justify-center">
          <ul className="flex flex-col items-center gap-8">
            <li className=""><a href="" clasNames="font-poppins font-semibold text-black">KITESURF</a></li>
            <li className=""><a href="" className="font-poppins font-semibold text-black">FOIL</a></li>
            <li className=""><a href="" className="font-poppins font-semibold text-black">SURF FOIL</a></li>
            <li className=""><a href="" className="font-poppins font-semibold text-black">WING FOIL</a></li>
            <li className=""><a href="" className="font-poppins font-semibold text-black">F-ONE</a></li>
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
