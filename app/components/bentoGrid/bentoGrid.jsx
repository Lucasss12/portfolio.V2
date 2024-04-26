import React from 'react'
import BentoAbout from './ui/bentoAbout'
import BentoSkills from './ui/bentoSkills'
import BentoRecentWork from './ui/bentoRecentWork'

export default function bentoGrid() {
  return (
    <div>
      <BentoAbout />
      <BentoSkills />
      <BentoRecentWork />
   </div>
  )
}
