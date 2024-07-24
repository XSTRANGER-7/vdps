
import React, { useEffect, useRef, useState } from 'react';
import Bus from "../assets/bus.png";
import Academic from "../assets/academic.png";
import Infra from "../assets/infrast.png";
import Sports from "../assets/sport.png";
import Hostel from "../assets/host.png";
import Creative from "../assets/creative.png";
import '../design/Facility.css'; // Import the custom CSS

const facilityData = [
  {
    image: Academic,
    heading: 'Academics',
    text: 'Our academic programs are designed to foster a love of learning and ensure academic excellence.',
  },
  {
    image: Infra,
    heading: 'Infrastructure',
    text: 'State-of-the-art facilities and modern infrastructure to support a conducive learning environment.',
  },
  {
    image: Sports,
    heading: 'Sports',
    text: 'Wide range of sports facilities to encourage physical fitness and competitive spirit.',
  },
  {
    image: Hostel,
    heading: 'Day Boarding',
    text: 'Comfortable and well-managed day boarding facilities for students.',
  },
  {
    image: Bus,
    heading: 'Buses',
    text: 'Safe and reliable transportation services for students.',
  },
  {
    image: Creative,
    heading: 'Creative Things',
    text: 'Programs and facilities to nurture creativity and innovation among students.',
  },
];

const Facility = () => {
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-id');
            if (!animatedCards.has(cardId)) {
              setAnimatedCards((prev) => new Set(prev).add(cardId));
            }
            observer.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const elements = document.querySelectorAll('.facility-card');
    elements.forEach((element) => observer.current.observe(element));

    return () => {
      elements.forEach((element) => observer.current.unobserve(element));
    };
  }, [animatedCards]);

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 to-orange-400">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Our Facility</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {facilityData.map((facility, index) => (
          <div
            key={index}
            data-id={`facility-${index}`}
            className={`bg-pink-200 border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:bg-white-300 cursor-pointer facility-card ${animatedCards.has(`facility-${index}`) ? 'animate-fade-in' : ''}`}
          >
            <img src={facility.image} alt={facility.heading} className="w-full h-48 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-center">{facility.heading}</h2>
              <p className="text-gray-700 text-center">{facility.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facility;

