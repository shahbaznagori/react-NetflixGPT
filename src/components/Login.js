import Header from "./Header";
import {useState} from "react";

const Login = ()=>{

    const [signInForm, setSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setSignInForm(!signInForm);
    }

    return(
        <div>
        <Header />
        <div className="absolute" >
            <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
       alt="Netflix-background"
     >
    </img>
        </div>
        <form className="absolute w-3/12 p-12 my-36 left-0 right-0 mx-auto bg-black text-white rounded-lg bg-opacity-80">
           <h1 className="font-bold text-3xl py-4">{signInForm ? "Sign In" : "Sign Up"}</h1>
           {!signInForm && (
            <input type="text" placeholder="Full Name" className="p-4 my-4 text-sm w-full bg-gray-700">                    
           </input>
           )}
           <input type="email" placeholder="Email or Phone Number" className="p-4 my-4 text-sm w-full bg-gray-700">                    
           </input>
           <input type="password" placeholder="Password" className="p-4 my-4 text-sm w-full bg-gray-700">                    
           </input>
           <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{signInForm ? "Sign In" : "Sign Up"}</button>
           <p className="py-4 text-sm cursor-pointer" onClick={toggleSignInForm}>{signInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
        </form>
        </div>
    )
}

export default Login;