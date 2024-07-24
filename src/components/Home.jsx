import React, { useEffect } from 'react';
import Slider from "./Slider";
import { gsap } from 'gsap';
import Notice from "./Notice";
import DirectorMessage from './Directormessage';
import Facts from './Facts';
import Facility from './Facility';
import Birthday from './Birthday';

const Home = () => {
//   useEffect(() => {
//     gsap.from('.home-content', { opacity: 0, duration: 1, y: 50 });
//   }, []);

  return (
    <div className="">
      <div className='md:flex'>
        <Slider/>
        <Notice/>
      </div>
      <DirectorMessage/>
      <Facility/>
      <Facts/>
      <section id='birthday'>
      <Birthday id='birthday'/>
      </section>  
    </div>
  );
};

export default Home;
