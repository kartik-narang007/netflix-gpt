import React from "react";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const VideoBackground = ({ id }) => {
  //fetch trailer video

  const trailerVideo = useSelector((store) => store.movies?.trailer);
  useMovieVideos(id);

  return (
    <div className="relative w-[1366px] h-[606px] aspect-w-16 aspect-h-9 overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full object-contain"
        title="YouTube Video Player"
        id="ytplayer"
        type="text/html"
        // width="1080"
        // height="590"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`}
        frameBorder="0"
        allowFullScreen
        style={{objectFit: 'cover', height: '100%', width: '100%', transform: 'scale(1.4)'}}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
