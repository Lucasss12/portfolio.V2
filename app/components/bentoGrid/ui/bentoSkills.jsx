import React from 'react'
import { FaAsterisk } from "react-icons/fa6";

export default function bentoSkills() {
  return (
   <div className='mt-3 sm:p-12 p-5 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey flex justify-between items-center text-secondary md:text-xl text-lg'>
      <FaAsterisk className='text-primary'/>
      <p>NextJS</p>
      <FaAsterisk className='text-primary'/>
      <p>React</p>
      <FaAsterisk className='text-primary'/>
      <p>Tailwind</p>
      <FaAsterisk className='text-primary'/>
      <p>Figma</p>
      <FaAsterisk className='text-primary'/>
   </div>
  )
}