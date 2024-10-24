import React from 'react'

function Product() {
  return (
    <>
      <section>
        <div className='max-w-[1200px] mx-auto items-center justify-center h-auto'>
<h1 style={{fontFamily:"Playfair Display"}} className='text-6xl uppercase  max-w-6xl'>the best dress for the best woman</h1>
        </div>
      </section>

<section className='max-w-[1200px] mx-auto items-center justify-center h-auto mt-6'>
<div className='grid  md:grid-cols-2 lg:grid-cols-4   gap-2 mx-auto'>
    <div className='shadow-lg max-w-md mx-auto'>
        <div className='overflow-hidden p-2'>
        <img className=' h-auto duration-1000 hover:scale-125' src="/product1.png" alt="" />
        
        </div>
        <p style={{fontFamily:"lato"}} className='uppercase text-[13px] mt-2 pt-3 text-gray-500'>Product Category</p>
        <h2 style={{fontFamily:"Playfair Display"}}  className='text-3xl py-2'>Product Name</h2>
        <p className='text-[16px] text-gray-500'>IDR XXX</p>
    </div>
    <div className='shadow-lg  max-w-md mx-auto'>
        <div className='overflow-hidden'>
        <img className='w-full sm:w-auto  h-auto duration-1000 hover:scale-125' src="/product2.png" alt="" />
        </div>
        <p style={{fontFamily:"lato"}} className='uppercase text-[13px] mt-2 pt-3 text-gray-500'>Product Category</p>
        <h2 style={{fontFamily:"Playfair Display"}}  className='text-3xl py-2'>Product Name</h2>
        <p className='text-[16px] text-gray-500'>IDR XXX</p>
    </div>
    <div className='shadow-lg  max-w-md mx-auto'>
        <div className='overflow-hidden'>
        <img className='w-full sm:w-auto  h-auto duration-1000 hover:scale-125' src="/product3.png" alt="" />
        </div>
        <p style={{fontFamily:"lato"}} className='uppercase text-[13px] mt-2 pt-3 text-gray-500'>Product Category</p>
        <h2 style={{fontFamily:"Playfair Display"}}  className='text-3xl py-2'>Product Name</h2>
        <p className='text-[16px] text-gray-500'>IDR XXX</p>
    </div>
    <div className='shadow-lg  max-w-md mx-auto'>
        <div className='overflow-hidden'>
        <img className='w-full sm:w-auto  h-auto duration-1000 hover:scale-125' src="/product4.png" alt="" />
        </div>
        <p style={{fontFamily:"lato"}} className='uppercase text-[13px] mt-2 pt-3 text-gray-500'>Product Category</p>
        <h2 style={{fontFamily:"Playfair Display"}}  className='text-3xl py-2'>Product Name</h2>
        <p className='text-[16px] text-gray-500'>IDR XXX</p>


        
    </div>
   
</div>
<div className='mt-2 pt-3 max-w-md  mb-3 flex justify-center sm:justify-start '>
<button className='bg-orange-900 p-2 text-white flex uppercase text-[14px]'>See More <span className='ps-2 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span></button>
</div>
</section>




    </>
  )
}

export default Product
