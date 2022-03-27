import React from "react";
import { Logout } from "../firebase";
import { useNavigate } from "react-router";

export default function LogOut() {
  function GoHome() {
    useNavigate("/");
  }

  return (
    <div>
      {localStorage.getItem("name") ? (
        <div>
          <h1>Are You Sure You Wanna Log Out</h1>

          <a href="/">{"No, Take Me Home      "}</a>
          <button onClick={Logout}>{" .      Get Me Outta Here "}</button>
        </div>
      ) : (
        "See Ya Soon"
      )}
    </div>
  );
}
