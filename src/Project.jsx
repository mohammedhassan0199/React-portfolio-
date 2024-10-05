import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Project() {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="px-[7%] py-14 flex flex-col items-center" id='project'>

    <div className=''>
        <h2 className="text-6xl font-bold my-6  lg:text-5xl md:text-4xl sm:text-2xl text-center">Projects</h2>
       <div className='grid grid-cols-3 gap-6 text-[#006315] font-semibold text-center'>
       <a href="https://github.com/mohammedhassan0199/React-portfolio-" target='-main'><img src="portfolio.png" className='w-[200px]' alt="" />Portfolio</a>
       <a href="https://github.com/mohammedhassan0199/Netflix-clone"><img className='w-[200px]' src="netflix.png" alt="" />Netflix Clone</a>

       <a href="https://github.com/mohammedhassan0199/CryptoCurrency-api"><img className='w-[200px]' src="crypto.png" alt="" />Crypto Currency Api Project</a>
       </div>
       
    </div>
    
    
    </section>
  )
}

export default Project