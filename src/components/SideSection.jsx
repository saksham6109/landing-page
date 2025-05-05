import React from 'react'

const SideSection = ({logo, text}) => {
  return (
    <div className='flex justify-left items-center px-3 p-2 pl-5 gap-4'>
        <div>
            {logo}
        </div>
        <div>
            {text}
        </div>
      
    </div>
  )
}

export default SideSection
