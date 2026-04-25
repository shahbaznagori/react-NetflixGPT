import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const Body = ()=>{
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
    
    return(<h1>
          <RouterProvider router={appRouter} />
     </h1>)
}

export default Body;