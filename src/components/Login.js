import Header from "./Header";
import {useState , useRef} from "react";
import validateForm from "../common/utils/validate";
import { signInWithGoogle } from "../common/utils/googleAuth";
import {useNavigate} from "react-router";




const Login = ()=>{
    const navigate = useNavigate();

    const [signInForm, setSignInForm] = useState(true);
    const [error, setError] = useState(null);
    const email  = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


const handleGoogleLogin = async () => {
  try {
    const { user, token ,isNewUser} = await signInWithGoogle();

    console.log("USER:", user);
    console.log("TOKEN:", token);
    console.log("isNewUser:", isNewUser);

     if (isNewUser) {
      console.log("👉 Signup flow");
      navigate("/browse");
    } else {
      console.log("👉 Login flow");
      navigate("/browse");
    }


    // 👉 Next step: store user / redirect

  } catch (err) {
    console.error(err);
    setError(err.message);
  }
};
    
    const handleButtonClick = ()=>{

      console.log(name?.current?.value);
       const message =validateForm(email.current.value, password.current.value , name?.current?.value);
       if(message){
         setError(message);
         return;
       }else setError(null);


       if(signInForm){
    }else{
        console.log("SIGNNING UP")

        //    auth()
        console.log("Sign Up");
       }
        
    }

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
        <form onSubmit ={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 my-36 left-0 right-0 mx-auto bg-black text-white rounded-lg bg-opacity-80">
           <h1 className="font-bold text-3xl py-4">{signInForm ? "Sign In" : "Sign Up"}</h1>
           {!signInForm && (
            <input 
            ref={name}
           type="text" placeholder="Full Name" className="p-4 my-4 text-sm w-full bg-gray-700">                    
           </input>
           )}
           <input 
           ref={email}
           type="email" placeholder="Email or Phone Number" className="p-4 my-4 text-sm w-full bg-gray-700">                    
           </input>
           <input 
           ref={password}
           type="password" placeholder="Password" className="p-4 my-4 text-sm w-full bg-gray-700">                    
           </input>
           <p className="text-red-500 text-sm">{error}</p>
           <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{signInForm ? "Sign In" : "Sign Up"}</button>
           <p className="py-4 text-sm cursor-pointer" onClick={toggleSignInForm}>{signInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
           <button className="p-4 my-5 bg-red-700 w-full rounded-lg flex items-center" onClick={handleGoogleLogin}>
  <img 
    className="w-6 mr-2 rounded-lg"
    src="https://developers.google.com/identity/images/g-logo.png" 
    alt="google"
  />
  <p className="text-lg w-full">Continue with Google</p> 
</button>
        </form>
        </div>
    )
}

export default Login;