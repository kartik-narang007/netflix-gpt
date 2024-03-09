import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Content";
import{ addGptMovieResult} from "../utils/gptSlice";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". Give me Only names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");



    const promiseArray =  gptMovies.map((movie)=>(
      searchMovieTMDB(movie)
    ))

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames:gptMovies ,movieResults: tmdbResults}))
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-4 py-4 col-span-9"
          placeholder={lang[langKey].placeholder}
        />
        <button
          className="col-span-3 py-2 px-4 bg-red-700 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
