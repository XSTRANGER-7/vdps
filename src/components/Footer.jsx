import React from 'react'; 
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white">
      <div className='flex flex-col md:flex-row justify-around items-center'>
       <div> 
          <div className='flex flex-col items-center md:items-start mt-6 md:mt-0'>
            <h5 className='sm:text-lg md:text-md'>Vidya Deep Public School</h5>
            <h6 className='sm:text-sm md:text-xs'>Babarpur, Ajeetmal, Auraiya</h6>
            <h6 className='sm:text-sm md:text-xs'>Uttar Pradesh - 206121</h6>
            <h6 className='text-xs'>@2024 VDPS ALL RIGHTS RESERVED</h6>
          </div>
       </div>
       <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
          <div className='flex items-center md:items-start'>
            <h5 className='text-lg md:font-normal lg:font-medium'>Contact:-</h5>
          </div>
          <div className='flex flex-col items-start'>
            <h5 className='text-xs lg:text-sm'>Phone - +91XXXXXXXXX</h5>
            <h5 className='text-xs lg:text-sm'>Email - vidyadeeppublicschool@mail.com</h5>
            <div className='flex gap-10 items-center justify-center'>
             <FaFacebook className='text-blue-600 text-3xl'/>
             <FaYoutube className='text-red-600 text-3xl'/>
             <FaInstagram className='text-pink-500 text-3xl'/>
            </div>
          </div>
       </div>
       <div className='flex flex-col items-center'>
        <h3 className='text-lg md:font-normal lg:font-medium'>Location</h3>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.3066282141217!2d79.2975353753285!3d26.574534076850334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39761cae0d370417%3A0xa9ee0172462c5c18!2sVidya%20Deep%20Public%20School%2Cbabarpur-Ajeetmal!5e0!3m2!1sen!2sin!4v1721795396535!5m2!1sen!2sin" style={{width:"350px" ,height:"140px" ,border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       </div>
      </div>
      <hr className='bg-black'/>
      <div>
        <p className='text-center'>© 2024 Vidya Deep Public School Babarpur (Auraiya). All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
