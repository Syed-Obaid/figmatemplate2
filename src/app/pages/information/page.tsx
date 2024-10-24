import React from 'react'

function Information() {
  return (
    <>
    <section className='max-w-[1320px] mx-auto items-center justify-center h-auto '>
      <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4'>
        <div className='w-full h-auto bg-gray-200 row-span-2 p-5'>
          <div className='bg-white text-center p-5 '>
            <div className=' flex justify-center'><img  src="/thumb.png" alt="" /></div>
            <h2 style={{fontFamily:"Playfair Display"}} className='text-2xl py-2'>100% Satisfaction Guaranteed  </h2>
            <p style={{fontFamily:"lato"}}className='text-sm text-start pb-12'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
          </div>
        </div>

        <div className='w-full h-auto bg-gray-200 col-span-2 p-5'>
        <div className='bg-white  p-5 flex  justify-center  items-center'>
            <div className='basis-[15%]'><img  src="/telephone.png" alt="" />
            
            </div>
        <div className='basis-[80%]'>
        <h2 style={{fontFamily:"Playfair Display"}} className='text-2xl py-2 px-3 '>24/7 Online Service </h2>
        <p style={{fontFamily:"lato"}}className='text-sm text-start'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
        </div>
         
            
          </div>
        </div>


        <div className='w-full h-auto bg-gray-200 row-span-2 p-5'>
        <div className='bg-white text-center p-5 '>
            <div className=' flex justify-center'><img  src="/vallet.png" alt="" /></div>
            <h2 style={{fontFamily:"Playfair Display"}} className='text-2xl py-2'>Payment With Secure System </h2>
            <p style={{fontFamily:"lato"}}className='text-sm text-start pb-12'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
          </div>
        </div>
        <div className='w-full h-auto bg-gray-200 col-span-2 p-5'>
        <div className='bg-white  p-5 flex  justify-center  items-center'>
            <div className='basis-[15%]'><img  src="/rocket.png" alt="" />
            
            </div>
        <div className='basis-[80%]'>
        <h2 style={{fontFamily:"Playfair Display"}} className='text-2xl py-2 px-3 '>Fast Delivery </h2>
        <p style={{fontFamily:"lato"}}className='text-sm text-start'>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
        </div>
         
            
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}

export default Information
