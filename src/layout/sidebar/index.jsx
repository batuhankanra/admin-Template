import { GiLion } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { menu } from "~/utils/menu";
import { FaArrowRight } from "react-icons/fa";



export default function SideBar() {
  return (
    <div className="min-h-screen w-14 hover:w-64 bg-primary/90 shadow-xl transition-all duration-300 ease-in-out flex flex-col group static top-0 ">
        

        <Link to={'/'} className="flex items-center p-2 m-2  w-64 hover:text-white transition-colors duration-100 text-2xl">
                <GiLion className="text-xl" />
                <span className="ml-4 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 sidebar-expended:hidden group-hover:block">
                    Kanra Admin
                </span>
            </Link>
        
        <div className="flex  flex-col gap-2 w-64  ">
            {/*Dashboard Link */}
            
            {menu.map(data=>(
                <Link key={data.id} to={data.link} className="flex items-center hover:bg-secondary rounded-md m-2 p-2 text-gray-400 hover:text-black  justify-between">
                <div className="flex gap-x-1">
                <data.icon className="text-xl " />
                <span className="ml-4 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 sidebar-expended:hidden group-hover:block ">
                    {data.title}
                    
                </span>
                </div>
                <FaArrowRight className="opacity-0 group-hover:opacity-100 duration-500 transition-all " />
            </Link>
            ))}
        </div>
        
        


    </div>
  )
}


