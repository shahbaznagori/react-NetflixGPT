import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../common/utils/firebase";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../common/utils/userSlice";

const Body = ()=>{

    const dispatch = useDispatch();
useEffect(()=>{
   
    onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("USER:", user);
    const {displayName , email , uid , photoURL} = user;
    dispatch(addUser({
        name: displayName,
        email,
        id: uid,
        photoURL
    }));
  } else {
    dispatch(removeUser());
  }
});
},[])
    
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
    
    return(
          <RouterProvider router={appRouter} />)
}

export default Body;