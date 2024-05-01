import React from 'react'
import BentoAbout from './ui/bentoAbout'
import BentoSkills from './ui/bentoSkills'
import BentoRecentWork from './ui/bentoRecentWork'
import BentoKeysWords from './ui/bentoKeysWords'

export default function bentoGrid() {
  return (
    <div>
      <BentoAbout />
      <BentoSkills />
      <div className='flex max-lg:flex-col lg:space-x-3'>
        <BentoRecentWork />
        <BentoKeysWords />
      </div>
   </div>
  )
}
