import { useState } from "react";
import { NavLink } from "react-router-dom"
// import { useState } from "react"


export default function Mobilenav(){
const[active,setActive]=useState(0)


const Menu=[
{to:"/akarsh.github.io", src:"user.png",alt:"",name:"Home",dis:"translate-x-0" },
{to:"/akarsh.github.io/experience",src:"experience.png",alt:"",name:"Experience",dis:"translate-x-16" },
{to:"/akarsh.github.io/education" ,src:"education.png" ,alt:"" ,name:"Education",dis:"translate-x-32"},
{ to:"/akarsh.github.io/skills",src:"skill.png",alt:"",name:"Skill",dis:"translate-x-48" },
    { to:"/akarsh.github.io/projects",  src:"project.png",alt:"",name:"Project",dis:"translate-x-64" },
    // {to:"/certifications",  src:"akarsh.github.io/certificate.png",alt:"",name:"Certificate",dis:"translate-x-80" },
];

    return(
        <>
        {/* Mobile Tab */}
    <div className="flex  z-50 w-full justify-center items-end   bottom-0 fixed md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
<div className="  flex items-center w-full mr-3 ml-3   justify-center rounded-t-3xl h-fit space-x-4    bg-blue-700">
     <ul className="flex space-x-2 h-14  justify-center items-center p-4 " >
        {
            Menu.map((menu,i)=>{
               return <li key={i} className='w-14'>
                    <NavLink to={menu.to} onClick={()=>setActive(i)}>
                        <img src={menu.src} alt={menu.alt}  className={` mx-auto  ${i===active ?  "-translate-y-4 w-10 h-9.5  border-2 border-slate-100  opacity-100 transition-all  duration-500 p-1  ease-linear  bg-blue-700 rounded-full":"h-6 w-6 "} `}/>
                        <p className={`text-white text-sm text-center  font-fontRoboto ${i===active?"opacity-100 transition-all -translate-y-3.5 duration-700  ease-linear":"hidden"}`}>{menu.name}</p>
                        </NavLink>
                    </li>
            })
        } 
     
     
     
     </ul>
</div>
</div>
        </>
    )
}