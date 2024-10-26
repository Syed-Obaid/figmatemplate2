
import React from 'react'

function Banner() {
  return (
    <>
    {/* <section className='bg-bannerImage bg-repeat bg-cover bg-top '> */}
    <section className='bg-cover bg-top ' style={{backgroundImage:"url('/banner.png')"}}>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} className='max-w-full h-max lg:h-screen px-5  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-blackOverlay ' >
           <div className='container mx-auto col-span-2 '>
<p style={{fontFamily:"Playfair Display"}} className='text-white w-full uppercase text-sm  max-w-2xl my-24 sm:mt-32  lg:mt-8 '>made in Indonesia, dedicated to Indonesia</p>

<h1 style={{fontFamily:"Playfair Display"}} className='text-white max-w-2xl uppercase text-6xl mb-4'>Discover the Art of Dressing Up</h1>

           </div>
       {/* <div className='flex flex-row'>    */}
<div className=' container mx-auto mr-4 mb-2 flex flex-col gap-2'>
 <div className='bg-white p-2 flex max-w-sm'>
 <div> 
  <img src="/insidebanner.png" alt="" />
 </div>
 <div className='ps-2'>
  <h3 className='text-xl '>Product Name in Here</h3>
  <p className='text-sm '>IDR 300.000</p>
  <button className='text-md pt-2 mt-2'>SHOP NOW</button>
 </div>
 </div>
{/* </div> */}
{/* <div className='mr-4'> */}
 <div className='bg-white p-2 flex max-w-sm'>
 
 <div className='ps-2'>

  <h3 className='text-xl '>Product Name in Here</h3>
  <p className='text-sm '>IDR 300.000</p>
  <button className='text-md pt-2 mt-2'>SHOP NOW</button>
 </div>
 <div> <img src="/insidebanner.png" alt="" /></div>
 </div>
</div>



{/* </div> */}

        </div>
    </section>
    </>
  )
}

export default Banner
