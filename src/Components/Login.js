import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Content";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/Validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { app } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {


//states and variables and hooks

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [authErrorMessage, setAuthErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
//functions

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  

  const handleClick = async () => {


    // console.log("button clicked");
    const currentIsSignIn = isSignIn; // Capture the current value of isSignIn
    // console.log(currentIsSignIn);

    const auth = getAuth(app);

    try {

      if (!currentIsSignIn) {

        // console.log(currentIsSignIn);

        const message = checkValidate(
          email.current.value,
          password.current.value
        );


        setErrorMessage(message);


        if (message) return;
        //SigninUp
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;
        //Profile Updating

        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-1/337556254_524926676512960_8245061719891553978_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_ohc=8KGFy5OX0M0AX_a4nGA&_nc_ht=scontent-del1-1.xx&oh=00_AfD8AXrME1Qu6tKuYFNSJ2LXo30fGeE3mDrbQw9xJTktlQ&oe=65E7D1FC"
        }).then(() => {
          console.log(auth.currentUser);
          const{uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
          )
          navigate("/browse");
        }).catch((error) => {
          setAuthErrorMessage(error.message);
        });

        // console.log(user);


      } else {


        // console.log(currentIsSignIn)

        //SignIn
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        //after SigninIn

        const user = userCredential.user;
        navigate("/browse")
        // console.log(user);
      }
    } catch (error) {
      setAuthErrorMessage(error.message);
      // console.log(error.message);
    }
  };

  return (
    <div className="relative">
      <Header />
    
    {/* body background */}


      <div className="relative">
        <div className="bg-black w-full h-full absolute opacity-50 z-10 object-cover"></div>
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="h-full w-full object-cover z-5"
        ></img>
      </div>


    {/* Login Form */}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute py-10 pl-16 pr-20 top-24 left-96 z-30 bg-black bg-opacity-85 rounded-sm w-4/12 transform translate-x-16"
      >


        <h1 className="font-semibold text-white text-3xl py-4 mb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md"
            ref={name}
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Your E-mail"
          className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md"
        />


        {!isSignIn && errorMessage === "E-mail ID is not valid" && (
          <p className="text-md text-red-700">E-mail ID is not valid</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md "
        />

        {!isSignIn && errorMessage === "Password is not valid" && (
          <p className="text-md text-red-700">Password is not valid</p>
        )}

        {isSignIn && <p className="text-md text-red-700">{authErrorMessage}</p>}

        <button

          onClick={handleClick}
          className="sign-in-button py-3 mt-8 w-full rounded-md text-white font-semibold"
          
        >

          {isSignIn ? "Click Here to Sign In" : "Click Here to Sign Up"}

        </button>


        <p className="pt-6 text-gray-400">
          {!isSignIn ? "Account Already Exists? " : "New to Netflix? "}
          <span
            onClick={toggleSignIn}
            className="text-white hover:cursor-pointer"
          >
            {!isSignIn ? "Sign In Now" : "Sign Up Now"}
          </span>
        </p>


      </form>

    </div>
  );
};

export default Login;
