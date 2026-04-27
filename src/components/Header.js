import {  signOut } from "firebase/auth";
import {auth} from "../common/utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../common/utils/userSlice";
import {toggleGPTSearchView} from "../common/utils/gptSlice";
import {SUPPORTED_LANGUAGES} from "../common/utils/Contants";
import {changeLanguage} from "../common/utils/configSlice";


const Header = ()=>{
    const navigate = useNavigate();

    const gptSerachView = useSelector(store=>store.gpt.showGPTSearch);
        const dispatch = useDispatch();

       const handleGPTSearchView=()=>{
            dispatch(toggleGPTSearchView(gptSerachView));
        }

        const handleLanguageChange =(e)=>{
            dispatch(changeLanguage(e.target.value));
        }


useEffect(()=>{
   
   const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("USER:", user);
    const {displayName , email , uid , photoURL} = user;
    dispatch(addUser({
        name: displayName,
        email,
        id: uid,
        photoURL
    }));
    navigate("/browse");
  } else {
    dispatch(removeUser());
    navigate("/");
  }
});

   return () => {
    unsubscribe();
   }
},[])



    const user = useSelector((store)=>store.user);
    console.log("USEssRS",user?.photoURL);

    const handleSignOut = async () => {
      signOut(auth).then(() => {
}).catch((error) => {
    navigate("/error");
  // An error happened.
});
      };

    return(
     <div className="absolute bg-gradient-to-b from-black w-full px-5 py-5 z-10 flex  justify-between">
            <img
            className= 'w-40'
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt = "Netflix-logo"
            ></img>
        {user  && (<div className="flex">
         <select className="h-10 mt-5 px-4 bg-gray-700" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map( (lang)=>( <option 
             className="text-white"
            key={lang.identifier}>{lang.name}</option>))}
         </select>
        <button
          onClick={handleGPTSearchView}
          className="text-white m-4 h-10 px-2 bg-red-600 rounded-full">
            {gptSerachView ? "Homepage" :"GPT Search"}</button>
        <img
        className="w-10 h-9 m-4 rounded-full"
        src={user.photoURL}
        alt="usere-icon"
        ></img>
        {/* {user.photoURL} */}
        <button  
          onClick={() => {handleSignOut()}}
        className=" bg-red-700 mt-4 w-20 h-9 rounded-lg font-bold text-white">Sign Out</button>
        </div>)
}
        </div>
    )
}

export default Header;