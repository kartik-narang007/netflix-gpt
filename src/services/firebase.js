// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoOqoCv64OhXFrQYo_yXNR_mbV-3ssy7g",
  authDomain: "netflixgpt-795c3.firebaseapp.com",
  projectId: "netflixgpt-795c3",
  storageBucket: "netflixgpt-795c3.appspot.com",
  messagingSenderId: "528004111618",
  appId: "1:528004111618:web:b83e19ebdc4387b876761b",
  measurementId: "G-3HWPXQBYRC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);