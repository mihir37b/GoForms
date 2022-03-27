import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyC9UdUQ9xZWsDzn957YqkZB32Oz_2km--k",
  authDomain: "goforms-d03dd.firebaseapp.com",
  projectId: "goforms-d03dd",
  storageBucket: "goforms-d03dd.appspot.com",
  messagingSenderId: "443040414729",
  appId: "1:443040414729:web:0c5497a58573cdeb3b8cd8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      useNavigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const Logout = () => {
  signOut(auth)
    .then(function () {
      localStorage.clear();
    })

    .catch(function (error) {
      // Error occurred.
    });
};
