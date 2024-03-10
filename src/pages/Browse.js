import React from "react";
import Header from "../layout/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../Components/MainContainer";
import SecondaryContainer from "../Components/SecondaryContainer";
import GptSearch from "../Components/GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();

  return (
    <div className="w-[98.7vw] 2xl:w-[98.8vw]">
      <Header />

      {/*
        Main Container
          -- Video Background
          -- Video Title
        Secondary Container
          - MovieList * n 
            -- MovieCards * n
     */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
