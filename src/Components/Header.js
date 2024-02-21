import React from "react";
import { LOGO_URL } from "../utils/Content";

const Header = () => {
  return (
    <div className="absolute z-30">
      <img
        src={LOGO_URL}
        alt="Netflix Logo"
        className="w-64 px-4 py-1 object-cover"
      ></img>
    </div>
  );
};

export default Header;
