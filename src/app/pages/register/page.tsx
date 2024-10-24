import React from 'react'

function Register() {
  return (
    <>
    <main className='bg-cover ' style={{backgroundImage:"url('/banner.png')"}}>
      <section style={{backgroundColor:"rgba(0,0,0,0.7)"}} className='w-screen h-screen  flex justify-center items-center'>
        <div className='max-w-4xl h-auto  border-2 bg-white border-slate-200 border-solid grid md:grid-cols-2'>

    <div className=''>
        <img className='bg-cover bg-center items-center h-[500px]' src="/signin.png" alt="" />
    </div>
    <div className='h-auto mx-auto  items-center '>
        <h2 style={{fontFamily:"Playfair Display"}} className='uppercase text-5xl py-4 mb-3'>register</h2>
        <label htmlFor="name" className='uppercase text-gray-500 text-[12px] '>name</label><br />
        <input type="text" name="name" id="name" placeholder='John Dee' className='border-gray-500 border-solid border-2 p-2 my-2'/><br />
        <label htmlFor="email" className='uppercase text-gray-500 text-[12px] '>email</label><br />
        <input type="email" name="email" id="email" placeholder='example@mail.com' className='border-gray-500 border-solid border-2 p-2 my-2'/><br />
        <label htmlFor="pass" className='uppercase text-gray-500 text-[12px]'>password</label><br />
        <input type="password" name="password" id="pass" placeholder='******' className='border-gray-500 border-solid border-2 p-2 my-2'/><br />
        <label htmlFor="cpass" className='uppercase text-gray-500 text-[12px]'>confirm password</label><br />
        <input type="password" name="confirmpassword" id="cpass" placeholder='******' className='border-gray-500 border-solid border-2 p-2 my-2'/><br />
        <button className='bg-orange-900 mt-4 p-2 w-[215px] text-white flex justify-between uppercase text-[12px]'>register<span className='ps-2  '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span></button>

<p style={{fontFamily:"Playfair Display"}}  className='text-[12px] text-gray-500 py-4'>Already have account? <a href="/pages/signin"> Sign In here</a></p>
    </div>
        </div>
      </section>
      </main>
    </>
  )
}

export default Register
