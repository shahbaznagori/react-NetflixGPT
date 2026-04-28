import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {

    const movieNames = useSelector(store=>store.gpt.movieNames);
    const movieResults = useSelector(store=>store.gpt.movieResults);
    if(movieNames == null) return;
    console.log("MOVIE RERSULST",movieResults);

    return (
    <div>
        <div className="p-4 m-4 bg-black text-white bg-opacity-75">
         {movieNames.map((movieName, index)=>{
            console.log("MOVIE NAME",movieResults[index]);
            return( <MovieList 
             title={movieName} 
             movies={movieResults[index].results} 
             />
            )
})}
       
        </div>
    </div>
    )

}

export default GPTMovieSuggestions;