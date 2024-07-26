import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/director_img.png";

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
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 50%",
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center px-4 lg:px-12 py-20 bg-white my-10 rounded shadow-lg"
    >
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <img
          ref={imageRef}
          src={img} // Replace with the actual image URL
          alt="Director"
          className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-tl-3xl rounded-br-3xl border-2 border-gray-700  mx-4 lg:mx-12 mb-4 md:mb-0"
        />
        
        <h1 className="text-2xl font-bold">Mr. Sudhir Gupta</h1>
        <div className="w-full h-1 bg-black mb-2 md:hidden"></div>
      </div>
      <div className="md:flex-1 flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-3xl font-bold mb-8 md:mb-2 flex text-center">
          Message from the Director
        </h2>
        <div className="md:w-10/12 lg:w-11/12 xl:w-7/12 h-1 bg-black mb-6 hidden md:flex"></div>
        <p
          ref={messageRef}
          className="text-sm sm:text-base font-normal text-center text-gray-700"
        >
          Welcome to our school! We are committed to providing an excellent
          education and fostering a supportive environment. We look forward to a
          wonderful year of growth and achievement. As we embark on another
          exciting academic year, remember that education is the key to
          unlocking your potential and achieving your dreams. Embrace each
          challenge as an opportunity to grow and learn. Your hard work and
          dedication will shape your future and make a difference in the world.
          Always strive for excellence, support one another, and never hesitate
          to ask for help. Together, we can achieve great things and build a
          brighter tomorrow. Believe in yourselves, stay focused, and let your
          passion for learning guide you to success.
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;
