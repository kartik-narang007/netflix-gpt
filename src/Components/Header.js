import React, { useEffect } from "react";
import { LOGO_URL, USER_AVATAR } from "../utils/Content";
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {app} from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice";
const auth = getAuth(app);

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
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


    useEffect(() => {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoUrl: photoURL }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
    }, []);


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
