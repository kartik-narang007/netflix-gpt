import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute top-0 left-0 right-0 z-10 w-full h-full bg-gradient-to-r from-black text-gray-200 overflow-hidden">
      <div className="px-8 py-[12%] h-full">
        <div>
          <h1 className="text-5xl font-bold opacity-80">{title}</h1>
          <p className="py-6 text-md w-1/4">{overview}</p>
        </div>
        <div>
          <button className="bg-white text-black rounded-[3px] py-2 px-8 mx-1 font-bold hover:bg-opacity-80">
            <span>
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </span>{" "}
            Play
          </button>
          <button className="bg-gray-500 bg-opacity-30 text-white rounded-[3px] py-2 px-8 mx-1 font-bold hover:bg-opacity-50">
            <FontAwesomeIcon size="lg" icon={faCircleInfo} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
