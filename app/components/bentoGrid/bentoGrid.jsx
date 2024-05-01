import React from 'react'
import BentoAbout from './ui/bentoAbout'
import BentoSkills from './ui/bentoSkills'
import BentoRightSide from './bentoRightSide/bentoRightSide'
import BentoLeftSide from './BentoLeftSide/bentoLeftSide'

export default function bentoGrid() {
  return (
    <div>
      <BentoAbout />
      <BentoSkills />
      <div className='flex max-lg:flex-col lg:space-x-3'>
        <BentoLeftSide />
        <BentoRightSide />
      </div>
   </div>
  )
}
