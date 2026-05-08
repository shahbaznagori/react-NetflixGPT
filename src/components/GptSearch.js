import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import {BG_IMAGE_URL} from "../common/utils/Contants";

const GptSearch = () => {
    return (
    <div>
            <div className="fixed -z-10" >
                    <img
  className="h-screen object-cover md:h-auto md:object-contain"
                    src={BG_IMAGE_URL}
               alt="Netflix-background"
             >
            </img>
                </div>
    <div className="md:pt-[2%] pt-[10%]">

        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
    </div>
    )

}

export default GptSearch;
