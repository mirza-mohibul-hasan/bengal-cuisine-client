import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/chefs/')
          // loader: ()=> fetch('https://b7a10-chef-recipe-hunter-server-side-mirza-mirza-mohibul-hasan.vercel.app/chefs/')
        },
        {
          path:'/chef/:id',
          element: <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
          // loader: ({params})=> fetch(`https://b7a10-chef-recipe-hunter-server-side-mirza-mirza-mohibul-hasan.vercel.app/chefs/${params.id}`)
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;