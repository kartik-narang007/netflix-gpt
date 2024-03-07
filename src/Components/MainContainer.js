import React from 'react';
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies || movies.length === 0) return null; // No movies to display

    // Get a random index within the range of available movies
    const randomIndex = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[randomIndex]
    // Get the random movie object
    // const mainMovie = movies[17];

    // Destructure the mainMovie object properties
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="w-[100%] h-[100vh]">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer;
