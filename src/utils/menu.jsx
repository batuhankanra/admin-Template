import { FaHome, FaUsers, FaCog } from 'react-icons/fa'; 
import { BiSolidCameraMovie } from "react-icons/bi";


export const menu=[
    {
        id:1,
        link:'/dashboard',
        title:'Dashboard',
        icon:FaHome 
    },
    {
        id:2,
        link:'/user',
        title:'User',
        icon:FaUsers 
    },
    {
        id:3,
        link:'/setting',
        title:'Setting',
        icon:FaCog
    },
    {
        id:4,
        link:'/movie-control',
        title:'Movie Control',
        icon:BiSolidCameraMovie
    }
]