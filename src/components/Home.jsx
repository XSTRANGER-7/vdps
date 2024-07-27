import React, { useEffect, useRef } from 'react';
import Slider from "./Slider";
import { gsap } from 'gsap';
import Notice from "./Notice";
import DirectorMessage from './Directormessage';
import Facts from './Facts';
import Facility from './Facility';
import Birthday from './Birthday';
import {useLocation} from 'react-router-dom'; 
import SEO from "./SEO";

const Home = () => {  
  const birthdayRef = useRef(null); // Reference to the Birthday section
  const location = useLocation(); // Get current location

  useEffect(() => {
    const hash = location.hash; // Check hash fragment on every render
    const birthdayElement = birthdayRef.current; 
    if (birthdayElement && hash === '#birthday') {
      // More precise scrolling (optional):
      const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;
      // const navbarHeight = 2; 
      birthdayElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        top: navbarHeight,
      });
    }
  }, [location]);
  return (
    <div className="">
      <SEO
      title="Home Page - Vidya Deep Public School Babarpur, Ajeetmal, Auraiya"
      description="Welcome to the home page of VDPS website.Vidya deep public school home page . vdps website babarpur. top achools in auraiya . top schools in etawah."
      keywords="main page, home, website, VDPS, vdps, ajitmal, vdps ajeetmal, vidya deep public school babarpur ajeetmal, babarpur, best schools, top schools, auraiya, etawah, vidya deep public school, vidya deep public school babarpur, vdps ajitmal, vdps auraiya, top schools babarpur, top schools up, top private schools, up board school in auraiya, cbse schools in auraiya"
      image="https://vidyadeeppublicschool.vercel.app/path/to/img.jpg"
      url="https://vidyadeeppublicschool.vercel.app"
    />
      <div className='md:flex'>
        <Slider/>
        <Notice/>
      </div>
      <DirectorMessage/>
      <Facility/>
      <Facts/>
      <section id='birthday' ref={birthdayRef}>
      <Birthday/>
      </section>  
    </div>
  );
};

export default Home;
