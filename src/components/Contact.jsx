
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { send } from '@emailjs/browser';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/Animation - 1715645682661.json';
import "../design/Contact.css"; // Add your Lottie animation JSON file here
import tick from "../assets/yes.png";
import { BallTriangle } from 'react-loader-spinner';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [mail, setMail] = useState('');
  const [rel, setRel] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const fullname = `${name}, MOBILE NO. is ${num}, MAIL ID is ${mail}, and relation is ${rel}`;
      const result = await send(
        'service_gmxp52l',
        'template_0cksyhp',
        {
          from_name: fullname,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      console.log('Email successfully sent!', result.text);
      reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send email. Error:', error.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start bg-purple-300 py-6">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 bg-gradient-to-r from-purple-600 to-orange-400 text-white flex flex-col justify-between items-center md:items-start">
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-6">Contact Details</h2>
            <p className="text-xl font-semibold mb-4">Timings: 8:00 AM - 2:00 PM</p>
            <p className="text-xl font-semibold mb-4">Phone: +123 456 7890</p>
            <p className="text-lg font-semibold mb-4">Email: info@school.com</p>
          </div>
          <div className="mt-6">
            <Lottie animationData={contactAnimation} loop={true} className="w-64" />
          </div>
        </div>
        {isSubmitted ? (
          <div className="flex w-full py-8 px-6  md:w-1/2 flex-col justify-center items-center">
            <div className='border-2 flex flex-col justify-center items-center gap-6 sm:gap-8 border-gray-500 bg-slate-100 px-2 sm:px-8 py-20 rounded'>
              <div className='rounded-full'><img src={tick} alt="" className='w-28 sm:w-40' /></div>
              <h2 className='font-semibold text-sm sm:text-lg text-green-500'>Message has been sent successfully!</h2>
            </div>
          </div>
        ) : (
          <div className="relative md:w-1/2 p-6">
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-40 z-10">
                <BallTriangle fill="#4A5568" />
              </div>
            )}
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full px-3 py-3.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 peer"
                  placeholder=" "
                  onChange={(e) => setName(e.target.value)}
                  name='name'
                />
                <label className="absolute left-3 top-2.5 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-purple-600 peer-focus:text-xs peer-placeholder-shown:text-lg">
                  Name
                </label>
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="relative">
                <input
                  type="tel"
                  {...register('mobile', { required: true, pattern: /^[0-9]{10}$/ })}
                  className="w-full px-3 py-3.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 peer"
                  placeholder=" "
                  onChange={(e) => setNum(e.target.value)}
                />
                <label className="absolute left-3 top-2.5 text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-purple-600 peer-focus:text-xs peer-placeholder-shown:text-lg">
                  Mobile No
                </label>
                {errors.mobile && <span className="text-red-500">Valid mobile number is required</span>}
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-3 py-3.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 peer"
                  placeholder=" "
                  name='email'
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
                <label className="absolute left-3 top-2.5 text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-purple-600 peer-focus:text-xs peer-placeholder-shown:text-lg">
                  Email
                </label>
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="relative">
                <select
                  className="w-full px-3 py-3.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 peer"
                  defaultValue=""
                  required
                  onChange={(e) => setRel(e.target.value)}
                >
                  <option value="" className='' disabled hidden>Relation</option>
                  <option value="student">Student</option>
                  <option value="guardian">Guardian</option>
                </select>
                <label className="absolute left-3 top-2.5 text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-purple-600 peer-focus:text-xs peer-placeholder-shown:text-lg">
                  Relation
                </label>
                {errors.relation && <span className="text-red-500">Relation is required</span>}
              </div>
              <div className="relative">
                <textarea
                  {...register('message', { required: true })}
                  rows="4"
                  className="w-full px-3 py-3.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 peer"
                  placeholder=" "
                  name='message'
                ></textarea>
                <label className="absolute left-3 top-2.5 text-gray-800 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:text-purple-600 peer-focus:text-xs peer-placeholder-shown:text-lg">
                  Message
                </label>
                {errors.message && <span className="text-red-500">Message is required</span>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
