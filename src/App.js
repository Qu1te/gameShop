import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Main from "./pages/Main";
import Login from "./pages/Login";
import About from "./pages/About";
import AddCard from "./pages/AddCard";
import Register from "./pages/Register";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/about-us",
      element:<About/>
    },
    {
      path:"/Addcard",
      element:<AddCard/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
