import Image from 'next/image'
import React from 'react'

export default function bentoComments() {
return (
   <div className='mt-3 sm:p-12 p-5 rounded-2xl border-[5px] bg-backgroundGrey border-borderGrey'>
      <div className='flex items-center'>
         <span className="inline-block glow-recent-work h-4 w-4 mr-2 rounded-full bg-primary"></span>
         <h3 className='text-white text-xl font-medium'>Avis cliens</h3>
      </div>

      <div className='mt-6 space-y-4'>
         <div className='text-white'>
            <p>
               “Superbe communication et travail correspondant parfaitement aux attentes.”
            </p>
            <div className='flex items-center mt-1'>
               <Image src='/avatar-comment-1.png' width={75} height={75} className='rounded-full border-[5px] border-borderGrey' alt='Avatar Lucas Méné' />
               <div className='ml-1'>
                  <h4 className='font-medium'>Jacommo D.</h4>
                  <h4 className='text-secondary'>Développeur Front-end</h4>
               </div>
            </div>
         </div> 

         <hr className='border-primary glow-hr'/>
         
         <div className='text-white'>
            <p>
               “Ayant travaillé en équipe avec Lucas sur ce projet, je témoigne de son sérieux et de ses compétences professionnelles. Je recommande.”
            </p>
            <div className='flex items-center mt-1'>
               <Image src='/avatar-comment-2.png' width={75} height={75} className='rounded-full border-[5px] border-borderGrey' alt='Avatar Lucas Méné' />
               <div className='ml-1'>
                  <h4 className='font-medium'>Yann G.</h4>
                  <h4 className='text-secondary'>Développeur Front-end</h4>
               </div>
            </div>
         </div> 

         <hr className='border-primary glow-hr'/>

         <div className='text-white'>
            <p>
               “Lucas est un développeur compétent et fiable, recommandé pour son expertise technique et son engagement dans la réussite des projets.”
            </p>
            <div className='flex items-center mt-1'>
               <Image src='/avatar-comment-3.png' width={75} height={75} className='rounded-full border-[5px] border-borderGrey' alt='Avatar Lucas Méné' />
               <div className='ml-1'>
                  <h4 className='font-medium'>Lucas L.</h4>
                  <h4 className='text-secondary'>Développeur Full-stack</h4>
               </div>
            </div>
         </div> 
      </div>
   </div>
)
}