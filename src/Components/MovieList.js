import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 from-black bg-gradient-to-t">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="scroll-div flex overflow-x-scroll overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
