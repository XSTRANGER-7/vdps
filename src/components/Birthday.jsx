import React, { useEffect, useRef, useState } from 'react';
import { students } from '../data/data';
import '../design/Birthday.css';
import capIcon from '../assets/cap.png';

const Birthday = () => {
  const today = new Date().toISOString().split('T')[0];
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
      { threshold: 0.9 }
    )
  );

  useEffect(() => {
    const elements = document.querySelectorAll('.birthday-card');
    elements.forEach((element) => observer.current.observe(element));

    return () => {
      elements.forEach((element) => observer.current.unobserve(element));
    };
  }, [animatedCards]);

  const todaysBirthdays = students.filter(
    (student) => student.birthday === today
  );

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 to-orange-400" id="birthday">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Today's Birthdays</h1>
      {todaysBirthdays.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 text-black">
          {todaysBirthdays.map((student, index) => (
            <div
              key={index}
              data-id={`birthday-${index}`}
              className={`bg-pink-200 border text-black border-gray-300 rounded-lg shadow-lg p-4 relative birthday-card ${
                animatedCards.has(`birthday-${index}`) ? 'animate-cap' : ''
              }`}
            >
              <img
                src={capIcon}
                alt="Birthday Cap"
                className="birthday-cap w-20 h-20 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
              />
              <h2 className="text-xl text-gray-900 font-bold mb-2 text-center">
                {student.name}
              </h2>
              <p className="text-gray-700 font-semibold text-center">{student.class}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-white">No birthdays today</p>
      )}
    </div>
  );
};

export default Birthday;
