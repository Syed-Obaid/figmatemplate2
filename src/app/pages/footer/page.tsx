import React from 'react'

function Footer() {
  return (
    <>
      <section className='bg-orange-900'>
        <div className='grid md:grid-cols-5 justify-center items-center mx-auto container pt-28'>
       <div className='col-span-2 p-5'>
        <div className=''>
            <h1  style={{fontFamily:"Playfair Display"}} className='text-5xl text-white pb-3'>Modeva</h1>
            <p style={{fontFamily:"lato"}}  className='text-white text-[12px] hover:text-neutral-400'>WhatsApp : <span className='ps-2'>+923235679703</span></p>
            <p style={{fontFamily:"lato"}}  className='text-white text-[12px] hover:text-neutral-400'>Email : <span className='ps-2'>Modeva@gmail.com</span></p>
            <p style={{fontFamily:"lato"}}  className='text-white text-[12px] hover:text-neutral-400'>Address : <span className='ps-2'> Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</span></p>
        </div>
       </div>
       <div className='p-5'>
        <div>
            <h2 className='text-xl text-white pb-3'>Menu</h2>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Sale</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">New Arrivals</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Formal Men</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Formal Woman</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Casual Men</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Casual Woman</a></p>
        </div>
       </div>
       <div className='p-5'>
       <div>
            <h2 className='text-xl text-white pb-3'>Get Help</h2>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">FAQ</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Customer Service </a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Refund and Return</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Terms and Conditions</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Shipping</a></p>
          
        </div>
       </div>
       <div className='p-5'>
       <div>
            <h2 className='text-xl text-white pb-3'>Account</h2>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">My Account</a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">My Orders </a></p>
           <p className='text-white text-[14px] hover:text-neutral-400'><a href="">Vouchers and Discounts</a></p>
        
        </div>
       </div>
        </div>
      </section>
    </>
  )
}

export default Footer
