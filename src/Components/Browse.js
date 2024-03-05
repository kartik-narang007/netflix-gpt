import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />

    {/*
        Main Container
          -- Video Background
          -- Video Title
        Secondary Container
          - MovieList * n 
            -- MovieCards * n
     */}

     <MainContainer/>
     {/* <SecondaryContainer/> */}
    </div>
  );
};

export default Browse;
