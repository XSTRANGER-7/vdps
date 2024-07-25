import React, { useEffect, useRef } from 'react';
import Slider from "./Slider";
import { gsap } from 'gsap';
import Notice from "./Notice";
import DirectorMessage from './Directormessage';
import Facts from './Facts';
import Facility from './Facility';
import Birthday from './Birthday';
import {useLocation} from 'react-router-dom';

const Home = () => {  
  const birthdayRef = useRef(null); // Reference to the Birthday section
  const location = useLocation(); // Get current location

  useEffect(() => {
    const hash = location.hash; // Check hash fragment on every render
    const birthdayElement = birthdayRef.current;
    console.log("be",birthdayElement,"h", hash);
    if (birthdayElement && hash === '#birthday') {
      // More precise scrolling (optional):
      const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;
      // const navbarHeight = 2;
      console.log("navbarHeight",navbarHeight);
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
