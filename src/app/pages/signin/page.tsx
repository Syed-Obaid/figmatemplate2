import React from 'react'

function SignIn() {
  return (
    <>
    <main className='bg-cover ' style={{backgroundImage:"url('/banner.png')"}}>
      <section style={{backgroundColor:"rgba(0,0,0,0.7)"}} className='w-screen h-screen  flex justify-center items-center'>
        <div className='max-w-screen-lg h-[450px]  border-2 bg-white border-slate-200 border-solid grid md:grid-cols-2'>

    <div className=''>
        <img className='bg-cover bg-center h-[445px] ' src="/signin.png" alt="" />
    </div>
    <div className='h-[384px] mx-auto  items-center '>
        <h2 style={{fontFamily:"Playfair Display"}} className='uppercase text-5xl py-4 mb-2'>Sign in</h2>
        <label htmlFor="email" className='uppercase text-gray-500 text-[12px] '>email</label><br />
        <input type="email" name="email" id="email" placeholder='example@mail.com' className='border-gray-500 border-solid border-2 p-2 my-2'/><br />
        <label htmlFor="pass" className='uppercase text-gray-500 text-[12px]'>password</label><br />
        <input type="password" name="password" id="pass" placeholder='******' className='border-gray-500 border-solid border-2 p-2 my-2'/><br />
<p className='text-[10px] text-gray-500'>Minimum 8 characters </p>
<p className='text-[10px] text-gray-500'>Must contain at least 1 number</p>
<p className='text-[10px] text-gray-500'>Must contain at least 1 capital case and 1 small case</p>
<p className='text-[10px] text-gray-500'>Must contain at least 1 symbol</p>


        <button className='bg-orange-900 mt-4 p-2 w-[215px] text-white flex justify-between uppercase text-[12px]'>Sign In <span className='ps-2  '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span></button>

<p style={{fontFamily:"Playfair Display"}}  className='text-[12px] text-gray-500 py-4'>Don’t have account? <a href="/pages/register"> Register here</a></p>
    </div>
        </div>
      </section>
      </main>
    </>
  )
}

export default SignIn
