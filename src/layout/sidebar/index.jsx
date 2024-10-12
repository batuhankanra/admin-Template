import { GiLion } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { menu } from "~/utils/menu";
import user1 from '~/assets/user/user1.jpg'



export default function SideBar() {
  return (
    <div className="min-h-screen w-14 hover:w-64 bg-primary transition-all duration-300 ease-in-out flex flex-col group ">
        

        <Link to={'/'} className="flex items-center p-2 m-2  w-64 hover:text-white transition-colors duration-100 text-2xl">
                <GiLion className="text-xl" />
                <span className="ml-4 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 sidebar-expended:hidden group-hover:block">
                    Kanra Admin
                </span>
            </Link>
        
        <div className="flex  flex-col gap-2 w-64  ">
            {/*Dashboard Link */}
            
            {menu.map(data=>(
                <Link key={data.id} to={data.link} className="flex items-center hover:bg-secondary rounded-md m-2 p-2 text-gray-400 hover:text-black">
                <data.icon className="text-xl " />
                <span className="ml-4 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 sidebar-expended:hidden group-hover:block">
                    {data.title}
                </span>
            </Link>
            ))}
        </div>
        
        


    </div>
  )
}


