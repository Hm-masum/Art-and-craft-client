import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllCraft from "../Pages/AllCraft";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
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
        element:<AllCraft></AllCraft>
      },
      {
        path:'/addCraft',
        element:<AddCraft></AddCraft>
      },
      {
        path:'/myCraft',
        element:<MyCraft></MyCraft>
      },
    ]
  },
]);


export default router