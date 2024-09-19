import React, { useEffect } from 'react'
import Demo from './Demo'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from "./Form"
function Contact() {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className=" px-[7%] flex py-[10%]  bg-[#F5F5F3] flex-col justify-center  lg:px-[4%] md:px-[2%] sm:px-[1.2%]" id='contact'>
<h2 className="text-6xl font-bold my-6 text-center mb-10 lg:text-5xl md:text-4xl sm:text-2xl sm:my-6"><Demo head="Contact Me" /></h2>
<div className="flex justify-center "> 
    <div className="text-white bg-[#1B732E] w-16 h-16 flex justify-center items-center rounded-xl text-2xl md:text-xl sm:text-base sm:w-10 sm:h-10">
    <i className="fa-regular fa-envelope"></i>
    </div>
    <div className="ml-5">
        <h2 className="text-slate-600 text-2xl mb-2 md:text-xl sm:text-base sm:mb-0 ">Email me</h2>
        <h3 className="text-xl font-medium  sm:text-base">mohammedhassan0199@gmail.com</h3>
    </div>
</div>
<Form/>


</section>
  )
}

export default Contact