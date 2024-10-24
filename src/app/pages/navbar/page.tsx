'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import logo from ""

function Navbar() {
const [isClick,SetIsClick]=useState(false)
const [color,setColor] = useState(false)


const toggleNavbar = () =>{
    SetIsClick(!isClick)
}

// const navEl = document.querySelector(".navbar")


// window.addEventListener('scroll', () => {
//     if(window.scrollY >= 100){
//         navEl?.classList.add('navbar-scrolled')
//     }
// })
const [scrolled, setScrolled] = useState(false)

function handleScroll(){
if(window.scrollY >80){
    setScrolled(true)
}else{
    setScrolled(false)
}
}
useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
},[])
// useEffect(()=>{

// },[scrolled])

  return (
<>
<main className=''>
<nav  className={`${scrolled ? "navbar":"bg-transparent"}` + " fixed  w-full top-6 pt-6 sm:pt-2 "}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
<div className="flex items-center justify-between h-16 ">
    <div className="flex items-center">
        <div className="flex-shrink-0 ">
            <a href="/" className=''><img className='w-24 sm:w-24 md:w-32 lg:w-40' src="/Modeva.png" alt="" /></a>
            {/* <img src="/Modeva.png" alt="" /> */}
        </div>
    </div>
    <div className='hidden md:flex'>
        <div style={{fontFamily:"Lato"}}  className='ml-4 flex items-center space-x-4'>
            <a href="/" className='text-white  transition-all cursor-pointer text-xl rounded-lg p-2 hover:text-orange-700 hover:underline decoration-white md:hover:scale-125 '>
            Catalog</a>

            <a href="#" className='text-white transition-all cursor-pointer  text-xl  rounded-lg p-2 hover:text-orange-700 hover:underline decoration-white md:hover:scale-125 '>
            Sale</a>

            <a href="#" className='text-white transition-all cursor-pointer text-xl   rounded-lg p-2 hover:text-orange-700  hover:underline decoration-white md:hover:scale-125 '>
            New Arrival</a>

            <a href="#" className='text-white transition-all cursor-pointer  text-xl  rounded-lg p-2 hover:text-orange-700   hover:underline decoration-white md:hover:scale-125 '>
            about</a>
        </div>
    </div>

<div className='relative  hidden sm:flex items-center justify-center gap-3'>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-orange-700 absolute left-3" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


    <input type="text" placeholder='Search....' className='py-1 pl-10 rounded-xl border-2  border-orange-900 focus:bg-slate-100 focus:outline-none' name="" id="" />
<Link href="/pages/signin"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg></Link>
   
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


</div>

    <div className='md:hidden flex items-center'>
        <button className='inline-flex items-center justify-center p-2 rounded-md    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
            {isClick ? (
                <svg className='h-6 w-6 text-white' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6112 12'/>
                </svg>
            ) : (
                <svg className='h-6 w-6 text-white' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
                </svg>
            )}
        </button>
    </div>
</div>
    </div>
    {isClick && (
        <div className="md:hidden">
            <div  className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href="/" className='block text-white transition-all cursor-pointer rounded-lg p-2'>
            Home</a>

            <a href="../about#about" className='block text-white transition-all cursor-pointer  rounded-lg p-2'>
            About</a>

            <a href="../services#services" className='block text-white transition-all cursor-pointer rounded-lg p-2'>
            Services</a>

            <a href="../contact#contact" className='block text-white transition-all cursor-pointer  rounded-lg p-2'>
            Contact</a>
            </div>
        </div>
    )}
</nav>

</main>
</>
  )
}

export default Navbar