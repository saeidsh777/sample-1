import Contact from "../pages/Contact/Contact"
import Home from "../pages/Home/Home"
import About from "../pages/about/about"

export const route = [
    {path:'/', element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/contact', element:<Contact/>},
]