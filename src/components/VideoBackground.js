import {  useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground =({movieId})=>{
    console.log("MID",movieId)
    const trailerVedio = useSelector(store=>store.movies.trailerVedio);
    useMovieTrailer(movieId)

return(<div>
      <iframe  
      src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1`}
      allow="autoplay"
      className=" w-screen aspect-video"
      title="YouTube video player" 
      referrerpolicy="strict-origin-when-cross-origin" 
      >

      </iframe>
        </div>)
}

export default VideoBackground;