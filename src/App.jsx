
import Hero from "./Hero";
import Navbar from "./Navbar";
import Demo from "./Demo";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  
return (
    <>

      <Navbar />
  
     <Hero /> 
     

<About />
<Skills />

<Project />
<Contact />
{/* <!-- ------------------- Footer -------------------- --> */}
 
 <div className="px-[7%] py-[5%] flex justify-center items-center">
 <a  href="#home" className="w-40 h-10 flex items-center sm:w-20" ><img src="mainlogo.webp" alt="" /></a>

<div className="flex items-center">
<a href="https://github.com/mohammedhassan0199" target="-main"><i className="fa-brands fa-github  text-[#1B732E] mx-5 text-4xl sm:text-2xl"></i></a>
<a href="https://app.netlify.com/teams/mohammedhassan0199/sites" target="-main"><img src="netlify.png" alt="" /></a>
</div>

 </div>

<div className="bg-[#1B732E] text-center py-[2%] text-white">
  <p className="sm:text-xs">© 2024 Mohammed Hassan. All rights reserved.</p>
  
    
  </div> 

    </>
  )
}

export default App
 