import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);
  return (
    movies && (
      <div className="bg-black w-[100%]">
        <div className="lg:-mt-44 xl:-mt-44 relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"Upcoming Movies"} movies={movies} />
          <MovieList title={"Horror"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
