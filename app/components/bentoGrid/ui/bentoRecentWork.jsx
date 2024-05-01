import React from 'react'

export default function bentoRecentWork() {
return (
   <div className='mt-3 lg:w-1/2 sm:p-12 p-5 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey'>
      <div className='flex items-center'>
         <span className="inline-block h-3 w-3 mr-2 rounded-full bg-primary"></span>
         <h3 className='text-secondary text-xl font-medium'>Projets récents</h3>
      </div>

      <div className='mt-6 space-y-4'>
         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-primary text-xl font-medium'>Front-end</h4>
               <p className='text-secondary text-base'>CAPEO</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2023 - En cours</p>
         </div> 
         
         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-white text-xl font-medium'>Front-end</h4>
               <p className='text-secondary text-base'>SUZUKI</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2023 - 2023</p>
         </div> 

         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-white text-xl font-medium'>Formateur</h4>
               <p className='text-secondary text-base'>LESSON SHARING</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2023 - 2023</p>
         </div> 

         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-white text-xl font-medium'>Front-end</h4>
               <p className='text-secondary text-base'>ARTISANT</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2022 - 2022</p>
         </div> 
      </div>
   </div>
)
}