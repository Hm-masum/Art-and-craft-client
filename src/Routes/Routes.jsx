import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllCraft from "../Pages/AllCraft";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import CraftDetails from "../Pages/CraftDetails";
import UpdateCraft from "../Pages/UpdateCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('http://localhost:5000/craft')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allCraft',
        element:<AllCraft></AllCraft>,
        loader: ()=>fetch('http://localhost:5000/craft')
      },
      {
        path:'/addCraft',
        element:<AddCraft></AddCraft>
      },
      {
        path:'/myCraft',
        element:<MyCraft></MyCraft>
      },
      {
        path:'/craftDetails/:id',
        element:<CraftDetails></CraftDetails>
      },
      {
        path:'/updateCraft/:id',
        element:<UpdateCraft></UpdateCraft>
      },
    ]
  },
]);


export default router