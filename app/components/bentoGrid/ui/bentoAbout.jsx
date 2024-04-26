import React from 'react'

export default function bentoAbout() {
  return (
    <div className='mt-6 p-12 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey text-white'>
      
      <div className='flex justify-between items-center text-secondary'>
         <p className='text-2xl font-medium'>Développeur Frond-End</p>

         <div className='flex items-center px-4 py-2 rounded-[38px] bg-backgroundBlack border-[4px] border-borderGrey hover:border-emerald-500 transition-colors duration-200 ease-in-out'> 
            <span className="inline-block h-5 w-5 mr-2 rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-green-200 to-green-500"></span>
            <p className='text-xl'>Disponible</p>
         </div>

      </div>
   </div>
  )
}