import React from 'react'

function Featured() {
  return (
    <>
      <section className='max-w-[1320px] mx-auto items-center justify-center h-auto mb-3'>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-5'>
    <div className=' max-w-full max-h-screen'>
     <div className=' h-64 bg-cover bg-top ' style={{backgroundImage:"url('/formalwomen.png')"}}>
<div className='flex items-center h-full ps-5'>
    <h1 style={{fontFamily:"Playfair Display"}} className='text-white text-5xl uppercase'>formal woman</h1>
</div>
     </div>

    </div>



    <div className=' max-w-full max-h-screen row-span-2 '>
    <div className='h-screen sm:h-full  bg-cover bg-top ' style={{backgroundImage:"url('/casualstyle.png')"}}>
    <div className='flex items-center h-full ps-5'>
    <h1 style={{fontFamily:"Playfair Display"}} className='text-white text-5xl uppercase'>Casual Style</h1>
</div>
     </div>
    </div>
    <div className='max-w-full max-h-screen'>
    <div className='h-64 bg-cover bg-top ' style={{backgroundImage:"url('/formalmen.png')"}}>
    <div className='flex items-center h-full ps-5'>
    <h1 style={{fontFamily:"Playfair Display"}} className='text-white text-5xl uppercase'>formal Men</h1>
</div>
     </div>
    </div>
</div>


      </section>
    </>
  )
}

export default Featured
