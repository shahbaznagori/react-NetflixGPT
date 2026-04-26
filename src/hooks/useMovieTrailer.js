
import {API_OPTIONS} from "../common/utils/Contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { addTrailerVedio } from "../common/utils/moviesSlice";

const useMovieTrailer = (movieId)=>{
    
    const dispatch = useDispatch();
 
 //fething movie vedios

 const getMovieVedios = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos

?page=1` ,API_OPTIONS);
    const json = await response.json();
    const trailers = json.results.filter(v=>v.type==="Trailer");  
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVedio(trailer));
}

useEffect(()=>{
   const trailer = getMovieVedios();
   
},[])

}

export default useMovieTrailer;