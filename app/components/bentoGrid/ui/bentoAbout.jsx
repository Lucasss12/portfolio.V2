import Image from 'next/image'
import React from 'react'

export default function bentoAbout() {
  return (
    <div className='mt-3 sm:p-12 p-5 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey text-white'>
      
      <div className='flex sm:flex-row flex-col sm:justify-between sm:items-center text-secondary'>
         <h3 className='order-2 sm:order-1 md:text-2xl text-xl font-medium max-sm:mt-3'>Développeur Frond-End</h3>

         <div className='order-1 sm:order-2 flex max-sm:w-[140px] items-center px-4 py-2 rounded-[38px] bg-backgroundBlack border-[2px] border-emerald-500 hover:border-emerald-400 transition-colors duration-200 ease-in-out'> 
            <span className="glow-available inline-block h-5 w-5 mr-2 rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-green-200 to-green-500"></span>
            <p className='md:text-xl '>Disponible</p>
         </div>
      </div>

      <div className='sm:mt-12 mt-6 flex justify-between items-center'>
         <div>
            <h1 className='md:text-4xl text-2xl font-medium'>Lucas Méné</h1>
            <p className='md:text-xl text-secondary mt-4'>
               Développeur front-end freelance 👨🏻‍💻 <br/> basé en France 📍
            </p>

            <button class="bg-primary py-1 px-2 rounded-lg border-2 border-borderGrey font-medium glow-button-call mt-4 text-lg">
               Organiser un appel
            </button>
         </div>

         <div>
            <Image src='/avatar.png' width={200} height={200} className='rounded-full border-[5px] border-borderGrey' alt='Avatar Lucas Méné' />
         </div>
      </div>
   </div>
  )
}