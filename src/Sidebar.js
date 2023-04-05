import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Sidebar(){

    const[open,setOpen]=useState(true)
 
    return(
        <>
        
        {/* Side Navbar */}
    <div id='sidebar'  className={`${open?'lg:w-80 xl:w-80 2xl:w-80 3xl:w-80 md:w-56 ':"w-24  "}  h-fit bg-blue-900 transition-all duration-700  ease-linear hidden md:block lg:block xl:block 2xl:block 3xl:block relative`}>
            <div className="absolute  rounded-full top-10 -right-4 cursor-pointer border border-white bg-white  p-2 animate-bounce " onClick={()=>setOpen(!open)}>
        <img src={open?"left-arrow.png":"right-arrow.png"} alt="" className=" w-4 h-4 cursor-pointer"  />
        </div>
        <div className={`font-fontPT space-y-4 flex flex-col justify-center items-center  text-gray-100  text-lg  border-r border-neutral-300  h-screen  `}>
            <div className="flex">
            <ul className={`flex flex-col mx-auto justify-center text-center item-center ${open?"space-y-3":"space-y-4"}`}>
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><NavLink to="/akarsh.github.io" >ABOUT</NavLink></li>:<li><NavLink to="/akarsh.github.io" ><img src="user.png" alt="" className="fill-white w-7 h-6 "/></NavLink></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><NavLink to="/experience">EXPERIENCE</NavLink></li>:<li><NavLink to="/experience" ><img src="experience.png" alt="" className="w-7 h-7 "/></NavLink></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><NavLink to="/education">EDUCATION</NavLink></li>:<li><NavLink to="/education" ><img src="education.png" alt="" className="w-7 h-7 "/></NavLink></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><NavLink to="/skills">SKILLS</NavLink></li>:<li><NavLink to="/skills" ><img src="skill.png" alt="" className="w-7 h-7 "/></NavLink></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><NavLink to="/projects">PROJECTS</NavLink></li>:<li><NavLink to="/projects" ><img src="project.png" alt="" className="w-7 h-7"/></NavLink></li>}
                {open?<li className="hover:text-gray-300 cursor-pointer  border-neutral-200"><NavLink to="/certifications">CERTIFICATONS</NavLink></li>:<li><NavLink to="/certifications" ><img src="certificate.png" alt="" className="w-8 h-7  "/></NavLink></li>}
            </ul>
            </div>
        </div>
            
        </div>



        </>
    )
}