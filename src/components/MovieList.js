import MovieCard from "./MovieCard";


const MovieList = ({title,movies})=>{
    return(
     <div className="p-2 text-white">
        <h1 className="text-2xl font-bold py-3">{title}</h1>
     <div className="flex overflow-x-scroll [scrollbar-width:none]">
    <div className="flex">
    {movies?.map((movie)=><MovieCard key={movie.id} poster={movie.poster_path} />)}
    </div>
    </div>
    </div>   
    ) 
    
}

export default MovieList;