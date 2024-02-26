import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const page = () => {
  return (
    <>
    <div className='sm:px-8 md:px-12 lg:px-20 xl:px-48 py-0 md:py-12 border-b-2'>
      <div className='flex flex-col md:flex-row gap-16 rounded-xl bg-white my-0 md:my-12'>
        <div className='md:w-1/2 bg-[url("/ok.jpg")] bg-cover h-[400px] md:h-auto'>
        </div>
        <form className='w-full md:w-1/2 mx-auto p-4'>
          <div className='flex flex-col mb-8'>
            <label className='text-xl md:text-3xl text-green-400 font-semibold pb-4 font-Oswald'>Name</label>
            <input type='text' placeholder='Name' className='border-[1px] border-green-400 p-2 rounded text-black'></input>
          </div>
          <div className='flex flex-col mb-8'>
            <label className='text-xl md:text-3xl text-green-400 font-semibold pb-4 font-Oswald'>Remarks</label>
            <textarea type='text' placeholder='Remarks' className='border-[1px] border-green-400 p-2 rounded text-black'></textarea>
          </div>
          <button className="text-green-400 border-green-400 border rounded mx-auto px-5 py-2 text-xl font-semibold flex">Send</button>
        </form>
      </div>
    </div>
      <div className='md:py-12 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-0 md:py-12 border-b-2'>
      <h1 className='text-6xl md:text-7xl text-white font-bold py-12 font-Oswald'><span className='text-green-400'>Contact</span> us</h1>
      <div className='flex justify-evenly flex-wrap py-12 gap-4'>
        <div className='flex items-center gap-2 md:gap-8'>
          <SlSocialInstagram className='md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-green-200'/>
            <p className=' font-Oswald text-lg md:text-2xl text-green-400'>www.instagram.com</p>
        </div>
        <div className='flex items-center gap-2 md:gap-8'>
          <SlSocialLinkedin className='md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-green-200'/>
            <p className=' font-Oswald text-lg md:text-2xl text-green-400'>www.linkedin.com</p>
        </div>
        <div className='flex items-center gap-2 md:gap-8'>
          <FaWhatsapp className='md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-green-200'/>
          <p className=' font-Oswald text-lg md:text-2xl text-green-400'>+977-956-456</p>
        </div>
        <div className='flex items-center gap-2 md:gap-8'>
          <CiFacebook className='md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-green-200'/>
          <p className=' font-Oswald text-lg md:text-2xl text-green-400'>www.facebook.com</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default page