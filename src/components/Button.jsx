import React from 'react'

const Button = ({text , type, onClick , isGoogle}) => {
  return (
    <div>
        <button
        
        type={type} 
        onClick={onClick}
        className={`
            h-fit text-l p-3 font-bold rounded-full md:w-50
            ${isGoogle ? " w-3xs bg-white text-[#9c28b1] border-2 " 
                        : " w-3xs bg-[#9c28b1] text-white"}           
          `}
        >

        {text} 
       
        </button>
      
    </div>
  )
}

export default Button
