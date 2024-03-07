import React from "react";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const VideoBackground = ({ id }) => {
  // Fetch trailer video
  const trailerVideo = useSelector((store) => store.movies?.trailer);
  useMovieVideos(id);

  return (
    <div className="w-full h-full video-background overflow-hidden">
      <iframe
        className="w-full h-full transform scale-y-[1.40] scale-x-[1.40]"
        title="YouTube Video Player"
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
