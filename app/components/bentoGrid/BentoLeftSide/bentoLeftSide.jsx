import React from 'react'
import BentoRecentWork from './ui/bentoRecentWork'
import BentoShowLastWork from './ui/bentoShowLastWork'

export default function bentoLeftSide() {
  return (
   <div className='lg:w-1/2 w-full  mt-3 border border-white'>
      <BentoRecentWork />
      <BentoShowLastWork />
   </div>
  )
}
