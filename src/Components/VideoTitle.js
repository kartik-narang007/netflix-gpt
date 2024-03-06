import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = (props) => {
  const { title, overview } = props;

  // Truncate overview if it has more than 50 words
  let truncatedOverview = overview;
  const overviewWords = overview.split(' ');
  if (overviewWords.length > 50) {
    truncatedOverview = overviewWords.slice(0, 50).join(' ') + "...";
  }

  return (
    <div className="opacity-60 w-[100%] aspect-video pt-[14%] px-16 absolute z-20 text-white bg-gradient-to-r from-black">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="py-6 text-md w-[20%]">{truncatedOverview}</p>
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
  );
};

export default VideoTitle;
