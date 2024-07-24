import React, { useState } from 'react';
import logo from "../assets/vdpslog.png";
import years from "../assets/y.png";

const Header = () => {


  return (
    <header className="bg-purple-200 text-black">
      <div className="container mx-auto flex justify-between items-center py-2 sm:px-10">  
        <div className='flex items-center'>
          <img
            src={logo} // Replace with the path to your logo
            alt="School Logo"
            className="h-20 w-20 sm:h-28 sm:w-28 sm:mr-10 mx-1"
          />
          <div>
             <h1 className="text-xl sm:text-4xl font-bold">VIDYA DEEP PUBLIC SCHOOL</h1>
             <h3 className="text-xs sm:text-base">BABARPUR, Auraiya (U.P.) - 206121 <span className='hidden sm:flex'>Affiliated to CBSE & UP BOARD PRYAGRAJ. </span></h3>
             {/* <h3 className="hidden sm:flex text-base">Affiliated to CBSE & UP BOARD ALLAHABAD.</h3> */}
            
             
          </div>
        </div>
          <div>
             <img src={years} alt="" className='hidden md:flex w-40 h-32'/>
          </div>
        </div>
        
    </header>
  );
};

export default Header;

