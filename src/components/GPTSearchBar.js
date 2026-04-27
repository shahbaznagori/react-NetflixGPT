import lang from "../common/utils/languageConstants";
import {useSelector} from "react-redux";

const GPTSearchBar = () => {
  const language = useSelector(store=>store.config.language);
  console.log("LANGUAGE",language);
  return (
<div className=" inline-block mt-36 ml-[25%]  w-full border border-yellow-500">
        <form
         className="w-1/2 grid grid-cols-12 bg-black">
            <input
             className="p-4 m-4 col-span-9"
            type="text" placeholder={lang[language].searchBar}
        />
            <button className=" col-span-3 y-2 m-4 px-4 bg-red-700 rounded-lg text-white">{lang[language].searchButton}

            </button>
        </form>
    </div>
    )

}

export default GPTSearchBar;