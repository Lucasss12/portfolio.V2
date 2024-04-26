import React from 'react'

export default function navbar() {
  return (
    <div className='border-[5px] border-borderGrey bg-backgroundGrey text-white font-medium flex justify-between sm:py-5 py-3 sm:px-20 px-5 md:text-2xl sm:text-lg rounded-[38px]'>
    
      <h1 className='text-primary cursor-pointer'>A PROPOS</h1>
      
      <h1 className='hover:text-primary cursor-pointer'>PORTFOLIO</h1>

      
      <h1 className='hover:text-primary cursor-pointer'>CONTACT</h1>
    </div>
  )
}