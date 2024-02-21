import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Content";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/Validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState([true]);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <div className="bg-black w-full h-full absolute opacity-50 z-10 object-cover"></div>
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="h-full w-full object-cover z-5"
        ></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute py-10 pl-16 pr-20 top-24 left-96 z-30 bg-black bg-opacity-85 rounded-sm w-4/12 transform translate-x-16">
        <h1 className="font-semibold text-white text-3xl py-4 mb-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Your E-mail"
          className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md"
        />
        {errorMessage === "E-mail ID is not valid" && <p className="text-md text-red-700">E-mail ID is not valid</p>}
        {!isSignIn && (
          <input
            type="text"
            placeholder="User Name"
            className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white focus:outline-none focus:placeholder-transparent input py-3 px-5 my-3 w-full rounded-sm text-md "
        />
        {errorMessage === "Password is not valid" && <p className="text-md text-red-700">Password is not valid</p>}

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
