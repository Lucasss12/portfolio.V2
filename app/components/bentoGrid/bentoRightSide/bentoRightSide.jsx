import React from 'react'
import BentoComments from './ui/bentoComments'
import BentoKeysWords from './ui/bentoKeysWords'

export default function bentoRightSide() {
  return (
   <div className='lg:w-1/2 w-full h-1/2 mt-3 border border-white'>
      <BentoKeysWords />
      <BentoComments />
   </div>
  )
}
