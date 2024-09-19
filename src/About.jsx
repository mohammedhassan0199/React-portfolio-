import React, { useEffect } from 'react'
import Demo from './Demo'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
   
<section className=" px-[7%] flex py-[10%]   sm:flex-col-reverse sm:justify-center lg:px-[4%] md:px-[2%] sm:px-[1.2%] sm:items-center " id='about'>

<div  data-aos="fade-right"  data-aos-duration="1500" className="w-2/5 h-[85vh] object-cover flex justify-start sm:w-1/2 sm:h-[60vh] ">
    {/* <img className="h-full" src="about.webp" alt="" /> */}
    <Demo url="about.webp"/>
</div>

<div   data-aos="fade-left"  data-aos-duration="1500" className="w-3/5  sm:w-full sm:justify-center sm:flex sm:flex-col sm:items-center">
    <h2 className="text-6xl font-bold my-6  lg:text-5xl md:text-4xl sm:text-2xl sm:my-3"><Demo head="About Me" /></h2>
    <p className="mt-10 mb-14 text-3xl font-medium text-justify lg:text-2xl md:text-xl sm:text-base sm:mb-8"><Demo desc="Hello! My name is Mohammed Hassan, and I am a frontend web developer with a fresh  BCA degree. My journey in web development began with a curiosity about how websites work and a passion for creating visually appealing and   functional designs. Over the past few years, I have immersed myself in learning and building projects that enhance my skills ."/></p>
    <div>
    <a className="px-10 py-3 text-white bg-[#1B732E] rounded-full font-medium text-2xl mr-6 lg:px-8 lg:py-2 lg:text-xl md:px-6 md:py-2 md:text-lg sm:px-3 sm:py-1 sm:text-sm" href="#">Download CV</a>
    <a className="text-[#227835] border-2 border-[#348346] px-10 py-3  rounded-full font-medium text-2xl  lg:px-8 lg:py-2 lg:text-xl md:px-6 md:py-2 md:text-lg sm:px-3 sm:py-1 sm:text-sm" href="#">Hire Me</a>
    </div>
</div>

</section>
  )
}

export default About