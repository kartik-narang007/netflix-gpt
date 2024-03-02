import React from "react";
import { LOGO_URL, USER_AVATAR } from "../utils/Content";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {app} from "../utils/firebase";
import { useSelector } from "react-redux";
const auth = getAuth(app);

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  // console.log(user);
  //functions

    //handleSignOut

    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          navigate("/error");
        });
    };
  return (
    <div className="absolute z-30 flex justify-between w-full bg-gradient-to-b from-black">
      <img
        src={LOGO_URL}
        alt="Netflix Logo"
        className="w-40 px-4 object-cover"
      ></img>
      {
        user && <div className="flex w-36 py-3 gap-3">
          <img src={user.photoURL || user.photoUrl} alt="user_avatar" className="w-9 h-9 rounded-full object-cover"></img>
          <button onClick={handleSignOut} className="text-white">Sign Out</button>
        </div>
      }
    </div>

  );
};

export default Header;
