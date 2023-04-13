import { Link } from "react-router-dom"

export default function Projects(){
    return(
        <>
    <div className="flex-1">

    <div id='experience' className="flex-1 z-0 h-screen w-auto">
       <div className=" min-h-screen  mb-8 lg:h-screen xl:h-screen 2xl:h-screen 3xl:h-screen p-8 md:p-8 lg:p-20 xl:p-28 2xl:p-28  bg-gray-100  flex flex-col justify-center  space-y-4  items-start" >
       <div className="flex flex-col items-start w-fit">
       <h1 className="text-3xl  md:text-4xl lg:text-4xl mb-2 p-2 xl:text-4xl 2xl:text-4xl 3xl:text-4xl border-b-4 rounded-xl  border-blue-500 text-gray-700 font-fontFjalla">Projects</h1>
       </div>


       <div className="flex flex-wrap z-0 w-full h-fit pb-24 md:pb-0 justify-center  item-center cursor-pointer lg:justify-start xl:justify-start 2xl:justify-start 3xl:justify-start item-center mx-auto  lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-y-6 gap-x-4">

        
      
       <div className="w-72 h-72 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72 relative group flex justify-center overflow-hidden shadow-lg  shadow-blue-400 items-center rounded-2xl ease-linear transition-all duration-500">
        <img src="akarsh.github.io/blogbg.jpg" alt="" className="h-full w-full rounded-2xl group-hover:scale-125 duration-300 ease-linear transition-all " />
       <div className=" absolute flex flex-col item-center mx-auto text-center justify-center opacity-80 bg-gradient-to-t from-blue-400 to-white items-center w-full h-0 group-hover:h-full group-hover:border-b-[7px] group-hover:border-r-[5px] border-blue-700 rounded-2xl left-0 overflow-hidden bottom-0 transition-all duration-500 ease-linear "> 
       <div className=" flex flex-col justify-center item-center  p-5">
       <h1 className="text-black font-fontRoboto font-semibold text-xl  group-hover:translate-y-0  group-hover:opacity-100 ">Blog</h1>
       <p className="text-black font-fontRoboto text-lg  group-hover:translate-y-1  group-hover:opacity-100 ">Place where you can share your blog with peoples.User can also other users blog.</p>
       <div className="flex item-center justify-center   mx-auto">
       <Link to="https://blogwebapp-826c1.web.app/" target="_blank" rel="noreferrer"><button className="group-hover:translate-y-2 h-auto hover:bg-blue-700 transition-all ease-linear duration-300 p-3 border-2 text-white bg-black opacity-100 w-fit  rounded-full "><img src="akarsh.github.io/share.svg" alt="" className="h-6 w-6"/></button></Link>
       </div>
        </div>
        </div>
        </div>
        


        <div className="w-72 h-72  md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72  relative  group flex justify-center items-center shadow-lg  shadow-blue-400 overflow-hidden rounded-2xl ease-linear transition-all duration-500">
        <img src="akarsh.github.io/newsbg.jpg" alt="" className="h-full w-full rounded-2xl  group-hover:scale-125 duration-300 ease-linear transition-all" />
        <div className=" absolute flex flex-col item-center mx-auto text-center justify-center opacity-80 bg-gradient-to-t from-blue-400 to-white items-center w-full h-0 group-hover:h-full group-hover:border-b-[7px] group-hover:border-r-[5px] border-blue-700 rounded-2xl left-0 overflow-hidden bottom-0 transition-all duration-500 ease-linear ">  
       <div className=" flex flex-col justify-center item-center mx-auto p-5 ">
       <h1 className="text-black font-fontRoboto font-semibold text-xl  group-hover:translate-y-0  group-hover:opacity-100 ">NewsBox</h1>
       <p className="text-black font-fontRoboto text-lg  group-hover:translate-y-1  group-hover:opacity-100  ">Place where you can get latest top headlines from the world.</p>
       <div className="flex item-center justify-center  mx-auto">
       <Link to="https://akarsh0801.github.io/newsbox.github.io" target="_blank" rel="noreferrer"><button className="group-hover:translate-y-2 h-auto hover:bg-blue-700 transition-all ease-linear duration-300  p-3 border-2 text-white bg-black opacity-100 w-fit  rounded-full "><img src="akarsh.github.io/share.svg" alt="" className="h-6 w-6"/></button></Link>
       </div>
        </div>
        </div>
        </div>


        <div className="w-72 h-72 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72  relative  group flex justify-center items-center shadow-lg  shadow-blue-400 overflow-hidden rounded-2xl ease-linear transition-all duration-500">
        <img src="akarsh.github.io/quotesbg.jpg" alt="" className="h-full w-full rounded-2xl group-hover:scale-125 duration-300 ease-linear transition-all" />
        <div className=" absolute flex flex-col item-center mx-auto text-center justify-center opacity-80 bg-gradient-to-t from-blue-400 to-white items-center w-full h-0 group-hover:h-full group-hover:border-b-[7px] group-hover:border-r-[5px] border-blue-700 rounded-2xl left-0 overflow-hidden bottom-0 transition-all duration-500 ease-linear "> 
       <div className=" flex flex-col justify-center item-center p-5">
       <h1 className="text-black font-fontRoboto font-semibold text-xl  group-hover:translate-y-0  group-hover:opacity-100 ">Quotes</h1>
       <p className="text-black font-fontRoboto text-lg  group-hover:translate-y-1  group-hover:opacity-100 ">Place where you will get best quotes.</p>
       <div className="flex item-center justify-center  mx-auto">
       <Link to="https://akarsh0801.github.io/quotes.github.io" target="_blank" rel="noreferrer"><button className="group-hover:translate-y-2 h-auto hover:bg-blue-700 transition-all ease-linear duration-300  p-3 border-2 text-white bg-black opacity-100 w-fit  rounded-full "><img src="akarsh.github.io/share.svg" alt="" className="h-6 w-6"/></button></Link>
       </div>
        </div>
        </div>
        </div>

        <div className="w-72 h-72 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72  3xl:h-72 relative  group flex justify-center items-center shadow-lg  shadow-blue-400 overflow-hidden rounded-2xl ease-linear transition-all duration-500">
        <img src="akarsh.github.io/quizbg.jpg" alt="" className="h-full w-full rounded-2xl group-hover:scale-125 duration-300 ease-linear transition-all" />
        <div className=" absolute flex flex-col item-center mx-auto text-center justify-center opacity-80 bg-gradient-to-t from-blue-400 to-white items-center w-full h-0 group-hover:h-full group-hover:border-b-[7px] group-hover:border-r-[5px] border-blue-700 rounded-2xl left-0 overflow-hidden bottom-0 transition-all duration-500 ease-linear "> 
       <div className=" flex flex-col justify-center item-center p-5">
       <h1 className="text-black font-fontRoboto font-semibold text-xl  group-hover:translate-y-0  group-hover:opacity-100 ">Quizz</h1>
       <p className="text-black font-fontRoboto text-lg  group-hover:translate-y-1  group-hover:opacity-100 ">Place where you can improve your knowledge by giving quiz.</p>
       <div className="flex item-center justify-center  mx-auto">
       <Link to="https://akarsh0801.github.io/quiz.github.io/" target="_blank" rel="noreferrer"><button className="group-hover:translate-y-2 h-auto hover:bg-blue-700 transition-all ease-linear duration-300 p-3 border-2 text-white bg-black opacity-100 w-fit  rounded-full "><img src="akarsh.github.io/share.svg" alt="" className="h-6 w-6"/></button></Link>
       </div>
        </div>
        </div>
        </div>

        <div className="w-72 h-72 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72  relative  group flex justify-center items-center shadow-lg  shadow-blue-400 overflow-hidden rounded-2xl ease-linear transition-all duration-500">
        <img src="akarsh.github.io/todobg.jpg" alt="" className="h-full w-full rounded-2xl group-hover:scale-125 duration-300 ease-linear transition-all" />
        <div className=" absolute flex flex-col item-center mx-auto text-center justify-center opacity-80 bg-gradient-to-t from-blue-400 to-white items-center w-full h-0 group-hover:h-full group-hover:border-b-[7px] group-hover:border-r-[5px] border-blue-700 rounded-2xl left-0 overflow-hidden bottom-0 transition-all duration-500 ease-linear "> 
       <div className=" flex flex-col justify-center item-center p-5">
       <h1 className="text-black font-fontRoboto font-semibold text-xl  group-hover:translate-y-0  group-hover:opacity-100 ">To-Do</h1>
       <p className="text-black font-fontRoboto text-lg  group-hover:translate-y-1  group-hover:opacity-100 ">Place where you can  create and manage a list of tasks or to-dos they want to do.</p>
       <div className="flex item-center justify-center  mx-auto">
       <Link to="https://akarsh0801.github.io/todo.github.io" target="_blank" rel="noreferrer"><button className="group-hover:translate-y-2 h-auto hover:bg-blue-700 transition-all ease-linear duration-300  p-3 border-2 text-white bg-black opacity-100 w-fit  rounded-full "><img src="akarsh.github.io/share.svg" alt="" className="h-6 w-6"/></button></Link>
       </div>
        </div>
        </div>
        </div>

        <div className="w-72 h-72 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72 relative  group flex justify-center items-center shadow-lg  shadow-blue-400 overflow-hidden rounded-2xl ease-linear transition-all duration-500">
        <img src="akarsh.github.io/gamebg.jpg" alt="" className="h-full w-full rounded-2xl group-hover:scale-125 duration-300 ease-linear transition-all " />
        <div className=" absolute flex flex-col item-center mx-auto text-center justify-center opacity-80 bg-gradient-to-t from-blue-400 to-white items-center w-full h-0 group-hover:h-full group-hover:border-b-[7px] group-hover:border-r-[5px] border-blue-700 rounded-2xl left-0 overflow-hidden bottom-0 transition-all duration-500 ease-linear "> 
       <div className=" flex flex-col justify-center  item-center p-5">
       <h1 className="text-black font-fontRoboto font-semibold text-xl  group-hover:translate-y-0  group-hover:opacity-100 ">Fun Game</h1>
       <p className="text-black font-fontRoboto text-lg  group-hover:translate-y-1  group-hover:opacity-100 ">Place where you can play a game to refresh your mood.</p>
       <div className="flex item-center justify-center  mx-auto">
       <Link to="https://akarsh0801.github.io/fungame.github.io" target="_blank" rel="noreferrer"><button className="group-hover:translate-y-2 h-auto hover:bg-blue-700 transition-all ease-linear duration-300 p-3 border-2 text-white bg-black opacity-100 w-fit  rounded-full "><img src="akarsh.github.io/share.svg" alt="" className="h-6 w-6"/></button></Link>
       </div>
        </div>
        </div>
        </div>

        </div>
       

        </div>
    </div>
        
    </div>

        </>
    )
}