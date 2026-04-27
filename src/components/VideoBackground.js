import {  useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground =({movieId})=>{
    console.log("MID",movieId)
    const trailerVedio = useSelector(store=>store.movies.trailerVedio);
    useMovieTrailer(movieId)

return(<div>
      <iframe  
      src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVedio?.key}&modestbranding=1&controls=0`}
    allow="autoplay; encrypted-media" 
      className=" w-screen aspect-video"
      title="YouTube video player" 
      referrerPolicy="strict-origin-when-cross-origin"
      frameBorder="0"
      allowFullScreen
      >

      </iframe>
        </div>)
}

export default VideoBackground;