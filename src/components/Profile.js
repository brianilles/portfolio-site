import React from "react";
import "../styles/Profile.scss";
import Brian from "../assets/brian-illes.jpg";

export default function Profile() {
  return (
    <div className="Profile">
      <img src={Brian} alt="Brian Illes" />

      <div className="profile-right">
        <h2>Software Developer</h2>

        <h4>Problem Solver · Builder</h4>
      </div>
    </div>
  );
}
