
import {API_OPTIONS} from "../common/utils/Contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addNowPlayingMovies} from '../common/utils/moviesSlice'
import {useSelector} from "react-redux";

const useNowPlayingMovies = ()=>{
     const dispatch = useDispatch();
     const nowPlayingMovies = useSelector(state=>state.movies.nowPlayingMovies);

const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json =await response.json();
    console.log("M",json.results);
    dispatch(addNowPlayingMovies(json.results))
    return json;

}


    useEffect(() => {
       if(!nowPlayingMovies) getNowPlayingMovies();
      }, []);

}

export default useNowPlayingMovies;