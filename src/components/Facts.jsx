// FactsComponent.jsx
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Facts = () => {
  const [counted, setCounted] = useState(false);
  const [labs, setLabs] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [staff, setStaff] = useState(0);
  const [students, setStudents] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true, // This will make sure the animation only happens once
    threshold: 0.1, // Adjust based on when you want the animation to trigger
  });

  useEffect(() => {
    if (inView && !counted) {
      setCounted(true);
      animateCounters();
    }
  }, [inView, counted]);

  const animateCounters = () => {
    const targetLabs = 5; // Replace with your target number
    const targetAlumni = 400; // Replace with your target number
    const targetStaff = 80; // Replace with your target number
    const targetStudents = 1500; // Replace with your target number

    let currentLabs = 0;
    let currentAlumni = 0;
    let currentStaff = 0;
    let currentStudents = 0;

    const increment = (target, setter, current) => {
      if (current >= target) return;
      setter(current + Math.ceil(target / 100));
      setTimeout(
        () => increment(target, setter, current + Math.ceil(target / 100)),
        50
      );
    };

    increment(targetLabs, setLabs, currentLabs);
    increment(targetAlumni, setAlumni, currentAlumni);
    increment(targetStaff, setStaff, currentStaff);
    increment(targetStudents, setStudents, currentStudents);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col bg-white-100 mb-20"
    >
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mt-10 mb-10">Key Facts</h1>
      </div>
      <div className=" flex gap-12 sm:gap-0 lg:gap-4 flex-col sm:flex-row justify-around p-6">
        <div className="flex-1 mx-4 px-3 py-10 md:px-4 md:py-8 border border-gray-300 rounded-lg bg-purple-300 shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Labs</h2>
          <p className="text-3xl font-bold">{labs}</p>
        </div>
        <div className="flex-1 mx-4 px-3 py-10 md:px-4 md:py-8 border border-gray-300 rounded-lg bg-purple-300 shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Alumni</h2>
          <p className="text-3xl font-bold">{alumni}</p>
        </div>
        <div className="flex-1 mx-4 px-3 py-10 md:px-4 md:py-8 border border-gray-300 rounded-lg bg-purple-300 shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Staff Members</h2>
          <p className="text-3xl font-bold">{staff}</p>
        </div>
        <div className="flex-1 mx-4 px-3 py-10 md:px-4 md:py-8 border border-gray-300 rounded-lg bg-purple-300 shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Students</h2>
          <p className="text-3xl font-bold">{students}</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
