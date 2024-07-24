import React, { useEffect } from 'react';
import { gsap } from 'gsap';
// import './About.css';

const About = () => {
  useEffect(() => {
    gsap.from('.about-content', { opacity: 0, duration: 1, y: -50 });
  }, []);

  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Our school has been providing excellent education for over 50 years.</p>
      </div>
    </div>
  );
};

export default About;
