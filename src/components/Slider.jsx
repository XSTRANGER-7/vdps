
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const images = [
  {
    src: 'https://t4.ftcdn.net/jpg/03/20/44/97/240_F_320449763_B9c9api2gxW54lcv5lK0DcucanqWoxpp.jpg',
    alt: 'Image 1',
    text: 'Welcome to Our School'
  },
  {
    src: 'https://t4.ftcdn.net/jpg/03/20/44/97/240_F_320449763_B9c9api2gxW54lcv5lK0DcucanqWoxpp.jpg',
    alt: 'Image 2',
    text: 'Excellence in Education'
  },
  {
    src: 'https://t4.ftcdn.net/jpg/03/20/44/97/240_F_320449763_B9c9api2gxW54lcv5lK0DcucanqWoxpp.jpg',
    alt: 'Image 3',
    text: 'A Place for Growth'
  }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    };

    timeoutRef.current = setTimeout(nextSlide, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  useEffect(() => {
    gsap.fromTo(
      `.carousel-slide-${current}`,
      { opacity: 0, x: '100%' },
      { opacity: 1, x: '0%', duration: 1, ease: 'power1.inOut' }
    );

    gsap.fromTo(
      `.carousel-text-${current}`,
      { opacity: 0, y: '100%' },
      { opacity: 1, y: '0%', duration: 1, delay: 0.5, ease: 'power1.inOut' }
    );
  }, [current]);

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
  };

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };

  return (
    <div className="relative w-full h-64 md:w-2/3 md:h-112 overflow-hidden md:mx-3 md:my-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'} carousel-slide-${index}`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className={`hidden md:flex absolute bottom-0 left-80 rounded-md text-white text-lg font-bold p-4 bg-black bg-opacity-50 carousel-text-${index}`}>
              {image.text}
            </div>
          </div>
        </div>
      ))}

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
