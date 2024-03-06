import React from "react";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const VideoBackground = ({ id }) => {
  //fetch trailer video

  const trailerVideo = useSelector((store) => store.movies?.trailer);
  useMovieVideos(id);

  return (
    <div className="w-[100%]">
      <iframe
        className="aspect-video"
        title="YouTube Video Player"
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`}
        frameBorder="0"
        allowFullScreen
        style={{
          objectFit: "contain",
          width: "83.3%",
          transform: "scale(1.4)"
        }}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
