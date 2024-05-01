import React from 'react'

export default function bentoRecentWork() {
return (
   <div className='sm:p-12 p-5 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey h-fit'>
      <div className='flex items-center'>
         <span className="inline-block glow-recent-work h-4 w-4 mr-2 rounded-full bg-primary"></span>
         <h3 className='text-white md:text-xl text-lg font-medium'>Projets récents</h3>
      </div>

      <div className='mt-6 space-y-4'>
         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-primary md:text-xl text-lg font-medium'>Front-end</h4>
               <p className='text-secondary md:text-base text-sm'>CAPEO</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2023 - En cours</p>
         </div> 
         
         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-white md:text-xl text-lg font-medium'>Front-end</h4>
               <p className='text-secondary md:text-base text-sm'>SUZUKI</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2023 - 2023</p>
         </div> 

         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-white md:text-xl text-lg font-medium'>Formateur</h4>
               <p className='text-secondary md:text-base text-sm'>LESSON SHARING</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2023 - 2023</p>
         </div> 

         <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between'>
               <h4 className='text-white md:text-xl text-lg font-medium'>Front-end</h4>
               <p className='text-secondary md:text-base text-sm'>ARTISANT</p>
            </div>
            <p className='text-secondary text-sm mt-1'>2022 - 2022</p>
         </div> 
      </div>
   </div>
)
}