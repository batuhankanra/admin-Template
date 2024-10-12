import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layout";
import About from "~/Page/About";
import Home from "~/Page/Home";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
])