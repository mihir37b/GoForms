import React from "react";
import "./App.css";
import Settings from "./components.js/Settings";
import { signInWithGoogle } from "./firebase";

export default function Login() {
  return (
    <div className="Login">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      {localStorage.getItem("name") ? (
        <div className="login-info">
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} alt="profile-pic" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
