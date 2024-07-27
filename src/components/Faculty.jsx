
import React, { useEffect, useRef, useState } from 'react';
import { facultyData } from '../data/facultydata';
import SEO from './SEO';
import '../design/Faculty.css'; // Import the custom CSS for animations

const Faculty = () => {
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
    const elements = document.querySelectorAll('.faculty-card');
    elements.forEach((element) => observer.current.observe(element));

    return () => {
      elements.forEach((element) => observer.current.unobserve(element));
    };
  }, []);

  return (
    <div className="p-6 bg-purple-100">
      <SEO
      title="Faculty Page - Vidya Deep Public School Website"
      description="Welcome to the Faculty page of VDPS website.Vidya deep public school faculty page . vdps website babarpur. top achools in auraiya . top schools in etawah. principal , teachers , staff members."
      keywords="faculty, members, staff members, principal, main page, home, website, VDPS, vdps, ajitmal, babarpur, best schools, top schools, auraiya, etawah, vidya deep public school, vidya deep public school babarpur, vdps ajitmal, vdps auraiya, top schools babarpur, top schools up, top private schools, up board school in auraiya, cbse schools in auraiya"
      image="https://vidyadeeppublicschool.vercel.app/path/to/img.jpg"
      url="https://vidyadeeppublicschool.vercel.app/faculty"
    />
      <h1 className="text-3xl font-bold text-center mb-8">Our Faculty</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {facultyData.members.map((member, index) => (
            <div
              key={index}
              data-id={`member-${index}`}
              className={`faculty-card bg-white border border-gray-300 rounded-lg shadow-lg py-10 px-4 relative ${animatedCards.has(`member-${index}`) ? 'animate-fade-in' : ''}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-44 h-44 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-center">{member.name}</h3>
              <p className="text-gray-600 font-semibold text-center">{member.designation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Senior Teachers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facultyData.seniorTeachers.map((teacher, index) => (
            <div
              key={index}
              data-id={`senior-${index}`}
              className={`faculty-card bg-white border border-gray-300 rounded-lg shadow-lg py-6 px-4 relative ${animatedCards.has(`senior-${index}`) ? 'animate-fade-in' : ''}`}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{teacher.name}</h3>
              <p className="text-gray-600 text-center">{teacher.designation}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Junior Teachers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facultyData.juniorTeachers.map((teacher, index) => (
            <div
              key={index}
              data-id={`junior-${index}`}
              className={`faculty-card bg-white border border-gray-300 rounded-lg shadow-lg py-6 px-4 relative ${animatedCards.has(`junior-${index}`) ? 'animate-fade-in' : ''}`}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{teacher.name}</h3>
              <p className="text-gray-600 text-center">{teacher.designation}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faculty;
