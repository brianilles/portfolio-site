import React from "react";
import MtBaldyHikeHalfway from "../assets/mt-baldy-hike.jpg";
import MtBaldyHikeTop from "../assets/mt-baldy-top.jpg";
import "../scss/About.scss";

function About() {
  return (
    <div>
      <h2>About</h2>
      <h3>Reading List</h3>
      <div className="about-card">
        <h4>2019</h4>
        <p>Here's I've been reading this year</p>
        <ul>
          <li>
            · <span>Sapiens:</span> A Brief History of Humankind <br />
            by Yuval Noah Harari
          </li>
          <li>
            · <span>The Master Algorithm:</span> How the Quest for the Ultimate
            Machine Will Remake our World
            <br /> by Pedro Domingos
          </li>
          <li>
            · <span>Homo Deus:</span> A Brief History of Tomorrow
            <br /> by Yuval Noah Harari
          </li>
        </ul>
      </div>
      <h3>Hiking</h3>
      <div className="about-card">
        <h4>January 2019</h4>
        <p>Mt. Baldy in Southern California.</p>
        <img src={MtBaldyHikeHalfway} alt="Brian hiking up Mt. Baldy" />
        <p className="caption">Here I am about half-way up the mountain.</p>
        <img src={MtBaldyHikeTop} alt="Brian hiking up Mt. Baldy" />
        <p className="caption">Made it to the top!</p>
      </div>
    </div>
  );
}

export default About;
