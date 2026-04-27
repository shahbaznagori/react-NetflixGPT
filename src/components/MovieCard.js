import {IMAGE_CDN_URL} from '../common/utils/Contants'

const MovieCard = ({poster})=>{
    return(<div
      className="w-40 pr-4"
     >
        <img
         src= {IMAGE_CDN_URL + poster}
         alt="movie card"
        />
        </div>)
}

export default MovieCard;