import React from 'react'
// import w from "../assets/work-in-progress.png"
import res from "../assets/result_2020.jpg";
import res1 from "../assets/result_2020.jpg";
import res2 from "../assets/result_2020.jpg";
import res3 from "../assets/result_2020.jpg";
import res4 from "../assets/result_2020.jpg";

const resData = [
  {
    text: 'Result of 2020 Batch', src: res, alt: 'Result of 2020 Batch'
  },
  {
    text: 'Result of 2021 Batch', src: res1, alt: 'Result of 2021 Batch'
  },
  {
    text: 'Result of 2022 Batch', src: res2, alt: 'Result of 2022 Batch'
  },
  {
    text: 'Result of 2023 Batch', src: res3, alt: 'Result of 2023 Batch'
  },
  {
    text: 'Result of 2024 Batch', src: res4, alt: 'Result of 2024 Batch'
  },

]
function Result() {
  return (
    <div className='w-full bg-slate-100 py-2'>
      {resData.map((res, index) => (
        <div key={index} className='flex flex-col items-center justify-center my-8 md:my-12'>
         <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-4'>{res.text}</h1>
         <img src={res.src} alt={res.alt} className='md:w-3/5 my-2 md:my-4 px-6' key={index}/>
         </div> 
      ))}
      
    </div>
  )
}

export default Result;
