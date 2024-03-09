import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Content";
import { addTrailer } from "../utils/movieSlice";

const useMovieVideos = (id) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
  
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
  
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      dispatch(addTrailer(trailer));
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
};

export default useMovieVideos;
