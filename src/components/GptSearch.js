import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import {BG_IMAGE_URL} from "../common/utils/Contants";

const GptSearch = () => {
    return (
    <div>
        <div className="absolute -z-10" >
                    <img
                    src={BG_IMAGE_URL}
               alt="Netflix-background"
             >
            </img>
                </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
    )

}

export default GptSearch;
