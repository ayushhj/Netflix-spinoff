// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANSVMLWhLiFNKhcbS3x9eeAauSnx0lh2M",
  authDomain: "netflixgpt-923d7.firebaseapp.com",
  projectId: "netflixgpt-923d7",
  storageBucket: "netflixgpt-923d7.appspot.com",
  messagingSenderId: "520173666958",
  appId: "1:520173666958:web:3c94eb22976293a248ffdf",
  measurementId: "G-DQWE651CLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();