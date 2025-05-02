import {
    createBrowserRouter,
  } from "react-router";
import Login from "./pages/Login";  
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
    {
      path: "/Dashboard",
      element: <Home/>,
      children: [
      {
        path: "",
        element: <div>Dashboard main</div>,
      },  
      {
        path: "1",
        element: <div>Create Opportunity</div>,
      },  
      {
        path: "2",
        element: <div>Create dsfdsfdfddsf</div>,
      }  
      ]
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