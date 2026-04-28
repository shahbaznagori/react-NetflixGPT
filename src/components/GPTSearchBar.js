import lang from "../common/utils/languageConstants";
import {useSelector} from "react-redux";
import {useRef} from "react";
import NeflixSuggestion from "../common/utils/openai";
import {API_OPTIONS} from "../common/utils/Contants";
import {useDispatch} from "react-redux";
import {addGPTMovieResult} from "../common/utils/gptSlice";


const GPTSearchBar = () => {
  const language = useSelector(store=>store.config.language);
  const dispatch = useDispatch();
  const searchText = useRef("");



  const searchMovieOnTMDB = async (name)=>{
    const respose =await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await respose.json();
    console.log("JSON",json);
    return json;
  }


  const handleGPTSearchClick = async ()=>{
    
    const response = await NeflixSuggestion(searchText.current.value);

    const movies = response.split(",");
    
    const repsonses =await movies.map((movie)=>searchMovieOnTMDB(movie));
    const tmdbResuls = await Promise.all(repsonses);
    console.log("MOIES",tmdbResuls);
    dispatch(addGPTMovieResult({movieNames:movies , movieResults:tmdbResuls}));

  }
  return (
<div className=" inline-block mt-36 ml-[25%]  w-full">
        <form
         className="w-1/2 grid grid-cols-12 bg-black"
         onSubmit={((e)=>e.preventDefault())}
         >
            <input
             ref={searchText}
             className="p-4 m-4 col-span-9"
            type="text" placeholder={lang[language].searchBar}
        />
            <button onClick={handleGPTSearchClick} className=" col-span-3 y-2 m-4 px-4 bg-red-700 rounded-lg text-white">{lang[language].searchButton}

            </button>
        </form>
    </div>
    )

}

export default GPTSearchBar;