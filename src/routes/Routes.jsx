import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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