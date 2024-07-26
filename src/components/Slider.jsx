
import React, { useEffect, useRef, useState } from 'react';
import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const images = [
  { src: img, alt: 'Image 1', text: 'Welcome to Our School' },
  { src: img2, alt: 'Image 2', text: 'Excellence in Education' },
  { src: img3, alt: 'Image 3', text: 'A Place for Growth' },
  { src: img4, alt: 'Image 4', text: 'Building Futures' }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    };

    timeoutRef.current = setInterval(nextSlide, 2200);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    }, 3000);
  };

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    }, 3000);
  };

  return (
    <div className="relative w-full h-64 md:w-2/3 md:h-112 overflow-hidden md:m-3">
      <div
        ref={sliderRef}
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            {/* <div className="hidden md:flex absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-bold">
              {image.text}
            </div> */}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
