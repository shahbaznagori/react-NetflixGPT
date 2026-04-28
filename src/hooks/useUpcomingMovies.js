
import {API_OPTIONS} from "../common/utils/Contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {addUpcomingMovies} from '../common/utils/moviesSlice'
import {useSelector} from "react-redux";



const useUpcomingMovies = ()=>{
     const dispatch = useDispatch();
     const upcomingMovies = useSelector(state=>state.movies.upcomingMovies);



const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json =await response.json();
    console.log("M",json.results);
    dispatch(addUpcomingMovies(json.results))
    return json;

}


    useEffect(() => {
      if(!upcomingMovies)  getNowPlayingMovies();
      }, []);

}

export default useUpcomingMovies;