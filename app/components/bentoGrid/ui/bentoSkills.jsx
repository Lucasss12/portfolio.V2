import React from 'react'
import { FaAsterisk } from "react-icons/fa6";

export default function bentoSkills() {
  return (
   <div className='mt-3 sm:p-12 p-5 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey flex justify-around items-center text-secondary text-xl'>
      <FaAsterisk className='text-primary sm:block hidden'/>
      <p>NextJS</p>
      <FaAsterisk className='text-primary sm:block hidden'/>
      <p>React</p>
      <FaAsterisk className='text-primary sm:block hidden'/>
      <p>Tailwind</p>
      <FaAsterisk className='text-primary sm:block hidden'/>
      <p>Figma</p>
      <FaAsterisk className='text-primary sm:block hidden'/>
   </div>
  )
}