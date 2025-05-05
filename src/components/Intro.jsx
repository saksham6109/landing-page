import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const Intro = ({ username }) => {
  return (
    <div className='bg-[#ffff] p-4'>
      <div className='flex flex-col sm:flex-row justify-center items-center sm:gap-11 p-5'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <img className='sm:h-32 sm:w-32 rounded-full border-2 border-dotted border-blue-700 p-1 bg-white object-cover' 
               src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
               alt="Profile" />
          <button className='h-7  w-12 p-2 text-xs rounded-2xl font-bold text-white bg-pink-500'>
            PRO
          </button>
        </div>
        <div className='flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4'>

          <h3 className='font-bold text-lg sm:text-2xl'>{username.split(" ")[0]}</h3>
          
          <div className='flex flex-col gap-1'>
            <p className='text-xs text-gray-500'>Product designer</p>
            <p className='text-blue-700 text-sm'>Flatlogic.com</p>
          </div>
          <div className='flex justify-center sm:justify-start gap-2 text-xs'>
            <button className='md:px-2 px-1 py-1 text-blue-600 bg-blue-200 rounded-sm'>UI/UX</button>
            <button className='md:px-2 px-1 py-1 text-yellow-600 bg-yellow-200 rounded-sm'>Art</button>
            <button className='md:px-2 px-1 py-1 text-pink-600 bg-pink-200 rounded-sm'>Backups</button>
            <button className='md:px-2 px-1 py-1 text-yellow-600 bg-yellow-200 rounded-sm'>Illustration</button>
            <button className='md:px-2 px-1 py-1 text-green-700 bg-green-200 rounded-sm'>Mobile</button>
          </div>
          <div className='flex justify-center sm:justify-start items-center text-gray-400 gap-5 sm:gap-7 mt-2'>
            <FaFacebookF />
            <FaMediumM />
            <CiGlobe />
            <FaBehance />
            <FaInstagram />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro;
