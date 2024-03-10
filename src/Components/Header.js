import React, { useEffect } from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../stores/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { toggleGptSearchView } from "../stores/gptSlice";
import {changeLanguage} from "../stores/configSlice";

const auth = getAuth(app);

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  // console.log(user);
  //functions

  //handleSignOut

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
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
    <div className="absolute w-[100%] 2xl:px-4 2xl:py-3 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        src={LOGO_URL}
        alt="Netflix Logo"
        className="lg:w-24 lg:object-contain xl:w-28 xl:object-contain 2xl:w-36"
      ></img>
      {user && (
        <div className="flex 2xl:pr-1">
          {showGptSearch && <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGptSearchClick}
            className="px-3 hover:opacity-95 text-white font-semibold"
          >
            {showGptSearch ? "Homepage" : <>GPT Search  <FontAwesomeIcon icon={faSearch} /> </>}
          </button>

          <img
            src={user.photoURL || user.photoUrl}
            alt=""
            className="w-8 h-8 mx-4 2xl:mt-3 rounded-full object-contain"
          ></img>
          <button
            onClick={handleSignOut}
            className="text-white 2xl:text-md 2xl:py-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
