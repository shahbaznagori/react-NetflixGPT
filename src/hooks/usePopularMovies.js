
import {API_OPTIONS} from "../common/utils/Contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addPopularMovies} from '../common/utils/moviesSlice'

const usePopularMovies = ()=>{
     const dispatch = useDispatch();

const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json =await response.json();
    console.log("POPULAR",json.results);
    dispatch(addPopularMovies(json.results))
    return json;

}


    useEffect(() => {
        getNowPlayingMovies();
      }, []);

}

export default usePopularMovies;