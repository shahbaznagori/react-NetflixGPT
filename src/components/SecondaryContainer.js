import MovieList from "./MovieList";
import {useSelector} from "react-redux";



const SecondaryContainer = ()=>{

    const movies = useSelector(store=>store.movies.nowPlayingMovies);
    const popularMovies = useSelector(store=>store.movies.popularMovies);
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
    console.log("upcomingMovies",upcomingMovies);

    return (
    <div className="bg-black">
        <div className="-mt-52 relative z-20 text-white px-10">
        <MovieList title={"NOW PLAYING"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
    </div>
    </div>
)
}

export default SecondaryContainer;

