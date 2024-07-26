import React from 'react';
import { useParams } from 'react-router-dom';
import Bus from "../assets/bus.png";
import Academic from "../assets/academic.png";
import Infra from "../assets/infrast.png";
import Sports from "../assets/sport.png";
import Hostel from "../assets/coming-soon.png";
import Creative from "../assets/creative.png";

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
    heading: '',
    text: '',
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

const FacilityDetail = () => {
  const { id } = useParams();
  const facility = facilityData[parseInt(id)];

  if (!facility) {
    return <p>Facility not found</p>;
  }

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 to-orange-400">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img src={facility.image} alt={facility.heading} className="w-full h-64 object-contain mb-4" />
        <h1 className="text-3xl font-bold mb-4">{facility.heading}</h1>
        <p>{facility.text}</p>
      </div>
    </div>
  );
};

export default FacilityDetail;
