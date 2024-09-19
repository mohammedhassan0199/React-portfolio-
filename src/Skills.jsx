import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Demo from './Demo';
import { Circle } from 'rc-progress';

function Skills() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="px-[7%] bg-[#F5F5F3] py-14 " id='skill'>

<div data-aos="fade-down"  data-aos-duration="1500">
    <h2 className="text-6xl font-bold my-6 text-center  lg:text-5xl md:text-4xl sm:text-2xl sm:my-6 "><Demo head="Skills" /></h2>

 <ul className="text-3xl font-medium grid gap-5 place-items-center " >
    <div className="flex items-center  flex-col"><li className="flex items-center"><Demo head="HTML" /></li>  <Circle percent={78} strokeWidth={5} strokeColor="#1B732E"  className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center"><Demo head="Css" /></li>  <Circle percent={73} strokeWidth={5} strokeColor="#1B732E" className="w-14" /> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center"><Demo head="Bootstrap" /></li>  <Circle percent={68} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center"><Demo head="Tailwind css" /></li>  <Circle percent={63} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-center"><Demo head="Java Script" /></li>  <Circle percent={55} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>

    <div className="flex items-center  flex-col "><li className="flex items-cente"><Demo head="React js" /></li>  <Circle percent={69} strokeWidth={5} strokeColor="#1B732E" className="w-14"/> </div>
 </ul>

   </div>



</section>
  )
}

export default Skills