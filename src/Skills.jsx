import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Circle } from 'rc-progress';

function Skills() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="px-[7%] bg-[#F5F5F3] py-14 " id='skill'>

<div data-aos="fade-down"  data-aos-duration="1500">
    <h2 className="text-6xl font-bold my-6 text-center  lg:text-5xl md:text-4xl sm:text-2xl sm:my-6 ">Skills</h2>

 <ul className="text-3xl font-medium grid gap-5 place-items-center " >
    <div className="flex items-center  flex-col"><li className="flex items-center">HTML</li>  <Circle percent={78} strokeWidth={5} strokeColor="#1B732E"  className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center">Css</li>  <Circle percent={73} strokeWidth={5} strokeColor="#1B732E" className="w-14" /> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center">Bootstrap</li>  <Circle percent={68} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center">Tailwind css</li>  <Circle percent={63} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center">JavaScript</li>  <Circle percent={55} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-cente">React js</li>  <Circle percent={69} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>
 </ul>

   </div>



</section>
  )
}

export default Skills