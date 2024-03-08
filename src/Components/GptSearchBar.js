import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  console.log(langKey);
  return <div className="pt-[10%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12">
        <input className="m-4 py-4 col-span-9" placeholder={lang[langKey].placeholder}/>
        <button className="col-span-3 py-2 px-4 bg-red-700 text-white rounded-md"><FontAwesomeIcon icon={faSearch}/></button>
    </form>
  </div>;
};

export default GptSearchBar;
