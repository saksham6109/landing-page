import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Pages = () => {
  return (
    <div className='bg-[#ffff] flex justify-start items-center gap-2 p-2  cursor-pointer'>
      <p className='text-gray-400' > App</p>
      <span className='text-gray-400' ><MdKeyboardArrowRight /></span>
      <p className='text-blue-500' >Profile</p> 
    </div>
  )
}

export default Pages;

