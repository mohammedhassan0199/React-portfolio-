import React, { useEffect } from 'react'
import Demo from './Demo'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero(props) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <header className=" px-[7%] bg-[#F5F5F3] lg:px-[4%] md:px-[2%] sm:px-[1.2%]" id='home'>

<section  className=" flex justify-between w-full sm:flex-col sm:justify-center sm:items-center">

    <div  data-aos="fade-right"  data-aos-duration="1500" className=" mt-[100px] w-[60%] sm:w-full sm:text-center sm:mt-8">

        <h3 className=" text-3xl text-[#006315]  font-semibold lg:text-2xl md:text-xl sm:text-base"><Demo intro="Hello I am"/></h3>

        <h2 className="text-6xl font-bold my-6  lg:text-5xl md:text-4xl sm:text-xl sm:my-3"><Demo mainhead="MOHAMMED HASSAN"/></h2>

        <h3 className=" text-3xl text-[#006315]  font-semibold  lg:text-2xl md:text-xl sm:text-base"><Demo job="Frontend Web Developer"/></h3>

        <p className="mt-10 mb-14 text-3xl font-medium  lg:text-2xl md:text-xl sm:text-base"><Demo desc="I'm a passionate frontend web developer with a keen eye for detail and a love for creating seamless user experiences."/></p>
        <a className="px-10 py-3 text-white bg-[#1B732E] rounded-full font-medium text-2xl mr-6 lg:px-8 lg:py-2 lg:text-xl md:px-6 md:py-2 md:text-lg  sm:px-3 sm:py-1 sm:text-sm " href="#">Contact Me</a>
        <a className="text-[#227835] border-2 border-[#348346] px-10 py-3 rounded-full font-medium text-2xl  lg:px-8 lg:py-2 lg:text-xl md:px-6 md:py-2 md:text-lg sm:px-3 sm:py-1 sm:text-sm" href="#">Learn More</a>

    </div>

    <div  data-aos="fade-left"  data-aos-duration="1500" className="mt-9 w-[40%] flex justify-end h-[90vh] sm:w-full md:h-[80vh] sm:h-[60vh] sm:justify-center"><img className="bg-blend h-full object-cover"  alt=""/><Demo url="hassan.webp"/> </div>
</section>
</header>
  );
}


export default Hero