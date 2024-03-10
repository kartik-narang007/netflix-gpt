import React from "react";
import {IMG_URL} from "../utils/Constants";
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return <div className="w-48 pr-4 transition-transform transform hover:scale-110">
    <img className="" src={IMG_URL + posterPath} alt="Movie Card"></img>
  </div>;
};

export default MovieCard;
