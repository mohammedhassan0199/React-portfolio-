import React from 'react'
import Demo from './Demo'

function Navbar() {
  return (
    <>
<nav className="flex h-32 items-center justify-between px-[7%] bg-[#F5F5F3] lg:px-[4%] md:px-[2%] sm:px-[1.2%]">

<div className="">
    <h1 id='home' className="w-28 lg:w-20 md:w-20 sm:w-16"><Demo url="mainlogo.webp"/></h1>
</div>

<div className="flex text-lg  font-semibold  lg:text-base md:text-base sm:text-sm">
    <a className="" href="#home"><Demo head="HOME"/></a>
    <a className="ml-10 sm:ml-3" href="#about"><Demo head="ABOUT ME"/></a>
    <a className="ml-10 sm:ml-3" href="#skill"><Demo head="SKILLS"/></a>
    <a className="ml-10 sm:ml-3" href="#project"><Demo head="PROJECT"/></a>
</div>

<div className=" text-white   font-medium text-xl flex justify-end   lg:text-lg md:text-lg sm:hidden">
    <a className=" h-12 w-44 flex items-center justify-center bg-[#1B732E] rounded-full lg:h-10 lg:w-40 md:h-10 md:w-40 sm:h-8 sm:w-28 " href="#contact"> CONTACT ME</a>
</div>
</nav>
    </>
  )
}

export default Navbar