import React from "react";
import Brian from "../assets/brian-illes.jpg";
import "../scss/Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="top">
        <div className="left">
          <img src={Brian} alt="Brian Illes" />
        </div>
        <div className="right">
          <h2>Brian Illes</h2>
          <h4>Software Developer</h4>
          <h5>Problem Solver · Builder</h5>
        </div>
      </div>
      <div className="bottom">
        <p>Hi, I'm Brian.</p>
      </div>
    </div>
  );
}

export default Home;
