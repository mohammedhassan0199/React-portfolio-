import React, { useEffect } from 'react'
import Demo from './Demo'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Project() {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="px-[7%] py-14 flex flex-col justify-start items-center" id='project'>

    <div>
        <h2 className="text-6xl font-bold my-6  lg:text-5xl md:text-4xl sm:text-2xl"><Demo head="Projects" /></h2>
       
    </div>
    
    
    </section>
  )
}

export default Project