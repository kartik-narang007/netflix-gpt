import React, { useEffect } from "react";
import { LOGO_URL, USER_AVATAR } from "../utils/Content";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const auth = getAuth(app);

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-[100%] px-8 py-1 bg-gradient-to-b from-black z-30 flex justify-between">
      <img src={LOGO_URL} alt="Netflix Logo" className="lg:w-24 lg:object-contain xl:w-28 xl:object-contain w-44"></img>
      {user && (
        <div className="flex lg:px-3 lg:py-4 xl:px-3 xl:py-4 p-5">
          <img
            src={user.photoURL || user.photoUrl}
            alt=""
            className="w-8 h-8 mx-3 rounded-full object-contain"
          ></img>
          <button onClick={handleSignOut} className="text-white text-sm">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
