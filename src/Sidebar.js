import { useState } from "react"
import { Link } from "react-router-dom"
import user from "../src/Assets/user.png"
import experience from "../src/Assets/experience.png"
import education from "../src/Assets/education.png"
 import skill from "../src/Assets/skill.png"
 import project from "../src/Assets/project.png"
 import certificate from "../src/Assets/certificate.png"

export default function Sidebar(){

    const[open,setOpen]=useState(true)
    return(
        <>       
        {/* Side Navbar */}
        <div id='sidebar'  className={`${open?'lg:w-80 xl:w-80 2xl:w-80 3xl:w-80 md:w-56 ':"w-24  "}  h-fit bg-blue-900 transition-all duration-700  ease-linear hidden md:block lg:block xl:block 2xl:block 3xl:block relative`}>
            <div className="absolute  rounded-full top-10 -right-4 cursor-pointer border border-white bg-white  p-2 animate-bounce " onClick={()=>setOpen(!open)}>
        <img src={open? "left-arrow.png":"right-arrow.png"} alt="" className=" w-4 h-4 cursor-pointer"  />
        </div>
        <div className={`font-fontPT space-y-4 flex flex-col justify-center items-center  text-gray-100  text-lg  border-r border-neutral-300  h-screen  `}>
            <div className="flex">
            <ul className={`flex flex-col mx-auto justify-center text-center item-center ${open?"space-y-3":"space-y-4"}`}>
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><Link to="/about" >ABOUT</Link></li>:<li><Link to="/about" ><img src={user} alt="" className="fill-white w-7 h-6 "/></Link></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><Link to="/experience">EXPERIENCE</Link></li>:<li><Link to="/experience" ><img src={experience} alt="" className="w-7 h-7 "/></Link></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><Link to="/education">EDUCATION</Link></li>:<li><Link to="/education" ><img src={education} alt="" className="w-7 h-7 "/></Link></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><Link to="/skills">SKILLS</Link></li>:<li><Link to="/skills" ><img src={skill} alt="" className="w-7 h-7 "/></Link></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><Link to="/projects">PROJECTS</Link></li>:<li><Link to="/projects" ><img src={project} alt="" className="w-7 h-7"/></Link></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><Link to="/certifications">CERTIFICATONS</Link></li>:<li><Link to="/certifications" ><img src={certificate} alt="" className="w-8 h-7  "/></Link></li>}
            </ul>
            </div>
        </div>           
        </div>
        </>
    )
}