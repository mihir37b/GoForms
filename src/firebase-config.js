// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9UdUQ9xZWsDzn957YqkZB32Oz_2km--k",
  authDomain: "goforms-d03dd.firebaseapp.com",
  projectId: "goforms-d03dd",
  storageBucket: "goforms-d03dd.appspot.com",
  messagingSenderId: "443040414729",
  appId: "1:443040414729:web:0c5497a58573cdeb3b8cd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
