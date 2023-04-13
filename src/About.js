import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function About(){
  

    const navigate=useNavigate();

    function Certificates(){
        navigate("/certifications");
    }

  return(
    <>
    <div className="flex-1">


{/* Left side */}
    <div id='rightContent' className="flex h-full w-full mb-10 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 3xl:mb-0">
       <div className=" min-h-screen w-full p-6 md:p-14 lg:p-20 xl:p-28 2xl:p-28  bg-gray-100  flex flex-row  justify-start items-center" >
        <div className="flex flex-col xl:flex-row-reverse gap-y-3 justify-between  lg:gap-4 xl:gap-4 2xl:gap-4 items-start  md:w-full lg:w-full xl:w-full 2xl:w-4/5 3xl:w-4/5">
        <div className="rounded-full h-72 w-72 md:h-72 md:w-72 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96  shadow-lg shadow-blue-400 flex justify-center items-center ">
            <img src="/akarsh.jpg" alt="" className="  mx-auto rounded-full  h-72 w-72 md:h-72 md:w-72 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96 3xl:h-96 3xl:w-96"/>
        </div>
        <div className="flex flex-col my-auto space-y-2">
            <h1 className="text-lg md:text-xl lg:text-xl mxld:text-xl 2xl:text-xl 3xl:text-xl font-fontRoboto text-neutral-700 ">Hi,I'm</h1>
            <p className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl 3xl:text-5xl text-gray-700 font-fontFjalla"> Akarsh <span className="text-blue-700 font-fontFjalla animate-pulse  ease-in-out ">Srivastava</span></p>
            <p className="text-2xl  text-gray-700 font-fontFjalla animate-bounce transition-all ">Frontend Developer</p>
            <p className="font-fontRoboto text-lg text-neutral-700">Email: <Link to="mailto:akarsh.srivasatava.338@gmail.com"><span typeof="email" className="text-blue-700 hover:text-blue-500 text-lg">akarsh.srivasatava.338@gmail.com</span></Link></p>
            <p className="font-fontRoboto text-lg text-neutral-700">Phone: <Link to="tel:+917084534871"><span typeof="email" className="text-blue-700 text-lg hover:text-blue-500">7084534871</span></Link></p>

            <Link to="https://linkedin.com/in/akarsh-srivastava-bb548a1a4" target="_blank" rel="noreferrer">
           <div className="h-7 w-7 bg-blue-900 ease p-1 mb-2 hover:scale-105 duration-700 rounded-sm flex flex-col justify-center item-center cursor-pointer">
            <img src="/linkedin.png" alt="" className="w-4 h-4 animate-bounce flex justify-center item-center mx-auto  " />
            </div></Link>
            
            <div className="flex flex-row gap-x-2">
            <button className="h-auto rounded-full w-fit border-2 hover:shadow-md hover:shadow-black border-black hover:border-blue-700 p-2  font-fontFjalla hover:scale-105 hover:bg-blue-700 hover:text-white text-black transition-all  duration-500 hover:ease-in-out">Download CV</button>
            <button className="h-auto rounded-full visible md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden w-fit border-2 hover:shadow-md hover:shadow-black border-black hover:border-blue-700 p-2  font-fontFjalla hover:scale-105 hover:bg-blue-700 hover:text-white text-black transition-all  duration-500 hover:ease-in-out" onClick={Certificates}>Certificates</button>
            </div>
        </div>
        </div>
        </div>
    </div>
        
    </div>

    </>

    )
}