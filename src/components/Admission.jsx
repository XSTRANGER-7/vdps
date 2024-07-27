import React from 'react'
import w from "../assets/work-in-progress.png";
import SEO from './SEO';

function Admission() {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-200'>
       <SEO
      title="Admission Page - Vidya Deep Public School Babarpur, Ajeetmal, Auraiya"
      description="Welcome to the Admission page of VDPS website.Vidya deep public school admission page . vdps website babarpur. top achools in auraiya . top schools in etawah."
      keywords="main page, home, website, VDPS, vdps, admission, fees structure, exams vdps, ajitmal, vdps ajeetmal, vidya deep public school babarpur ajeetmal, babarpur, best schools, top schools, auraiya, etawah, vidya deep public school, vidya deep public school babarpur, vdps ajitmal, vdps auraiya, top schools babarpur, top schools up, top private schools, up board school in auraiya, cbse schools in auraiya"
      image="https://vidyadeeppublicschool.vercel.app/path/to/img.jpg"
      url="https://vidyadeeppublicschool.vercel.app"
    />
      <img src={w} alt="" className='w-96'/>
    </div>
  )
}

export default Admission;
