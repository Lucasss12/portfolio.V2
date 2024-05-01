import React from 'react'

export default function bentoKeysWords() {
return (
   <div className='text-secondary font-medium'>
      <div className='flex justify-center md:p-8 p-5 rounded-2xl border-[5px] bg-backgroundGrey background-key-word-1 border-borderGrey'>
         <h4>Interface utilisateur (UI)</h4>
      </div>

      <div className='flex space-x-3 '>
         <div className='mt-3 w-full flex justify-center md:p-8 p-5 rounded-2xl border-[5px] bg-backgroundGrey background-key-word-1 border-borderGrey'>
            <h4>Responsive</h4>
         </div>

         <div className='mt-3 w-full flex justify-center md:p-8 p-5 rounded-2xl border-[5px] bg-backgroundGrey background-key-word-2 border-borderGrey'>
            <h4>Minimalisme</h4>
         </div>
      </div>
   </div>
)
}