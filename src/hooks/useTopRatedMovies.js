
import {API_OPTIONS} from "../common/utils/Contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addTopRatedMovies} from '../common/utils/moviesSlice'
import {useSelector} from "react-redux";

const useTopRatedMovies = ()=>{
     const dispatch = useDispatch();
     const topRatedMovies = useSelector(state=>state.movies.topRatedMovies);


const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json =await response.json();
    console.log("M",json.results);
    dispatch(addTopRatedMovies(json.results))
    return json;

}


    useEffect(() => {
       if(!topRatedMovies) getNowPlayingMovies();
      }, []);

}

export default useTopRatedMovies;