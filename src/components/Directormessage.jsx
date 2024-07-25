import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DirectorMessage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-center px-4 lg:px-12 py-20 bg-white my-10 rounded shadow-lg">
      <img
        ref={imageRef}
        src="https://imgs.search.brave.com/sm7J1DTz9ujxr0g0cYLGyG-NdgEAkrK-lsnomPXavN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDE1MTYxNjAwNzEt/NGJiMGM1YWY2NWJh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UaDhmSEJvYjNS/dlozSmhjR2g1ZkdW/dWZEQjhmREI4Zkh3/dw" // Replace with the actual image URL
        alt="Director"
        className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-tl-3xl rounded-br-3xl border-2 border-sky-600  mx-4 lg:mx-12 mb-4 md:mb-0"
      />
      <div className="md:flex-1 flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 flex text-center">Message from the Director</h2> 
        <p ref={messageRef} className="text-sm sm:text-base text-center text-gray-700">
          Welcome to our school! We are committed to providing an excellent education and fostering a supportive environment.
          We look forward to a wonderful year of growth and achievement. As we embark on another exciting academic year, remember that education is the key to unlocking your potential and achieving your dreams. Embrace each challenge as an opportunity to grow and learn. Your hard work and dedication will shape your future and make a difference in the world. Always strive for excellence, support one another, and never hesitate to ask for help. Together, we can achieve great things and build a brighter tomorrow. Believe in yourselves, stay focused, and let your passion for learning guide you to success.
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;
