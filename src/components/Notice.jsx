
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import New from "../assets/new.png";

const notices = [
  { text: "Annual Circular 2024-25", link: "#" },
  { text: "Parent-teacher meeting on 20th August", link: "#" },
  { text: "New library books available", link: "#" },
  { text: "Annual sports day on 25th August", link: "#" },
  { text: "School picnic on 1st September", link: "#" }
];

const Noticeboard = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const height = wrapperRef.current.scrollHeight;
    tweenRef.current = gsap.to(containerRef.current, {
      y: -height,
      ease: 'none',
      duration: 2 * notices.length,
      repeat: -1
    });

    return () => {
      tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current.play();
  };

  return (
    <div className='w-full md:w-1/3 h-96 px-6 my-3 md:absolute md:right-0'>
      <div className="text-center text-white text-xl sm:text-2xl rounded font-bold py-2 bg-gradient-to-r from-purple-500 to-orange-500">
        Notice Board
      </div>
    <div className="relative  h-96 bg-white-800 text-white overflow-hidden">
      <div
        ref={wrapperRef}
        className="absolute bottom-0 w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={containerRef} className="space-y-8 p-4">
          {notices.map((notice, index) => (
            <div key={index} className="bg-sky-900 bg-opacity-50 p-2 rounded flex items-center justify-between">
              <div className="flex items-center">
                <li>{notice.text}</li>
                <img src={New} alt="New" className="w-10 h-10 ml-2" />
              </div>
              <a href={notice.link} className="bg-blue-400 px-2 py-1 rounded text-white hover:text-orange-400" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Noticeboard;


