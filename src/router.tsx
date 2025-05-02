import {
    createBrowserRouter,
  } from "react-router";
import Login from "./pages/Login";  
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);
  
export default router;