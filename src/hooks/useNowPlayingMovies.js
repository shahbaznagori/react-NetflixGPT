
import {API_OPTIONS} from "../common/utils/Contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addNowPlayingMovies} from '../common/utils/moviesSlice'

const useNowPlayingMovies = ()=>{
     const dispatch = useDispatch();

const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json =await response.json();
    console.log("M",json.results);
    dispatch(addNowPlayingMovies(json.results))
    return json;

}


    useEffect(() => {
        getNowPlayingMovies();
      }, []);

}

export default useNowPlayingMovies;