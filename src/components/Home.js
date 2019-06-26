import React from "react";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import Brian from "../assets/brian.JPG";
import "../scss/Home.scss";

const GithubDark = styled(Github)`
  color: #000;
  height: 25px;
  width: 25px;
`;
const LinkedinDark = styled(LinkedinSquare)`
  color: #000;
  height: 25px;
  width: 25px;
`;
const TwitterDark = styled(Twitter)`
  color: #000;
  height: 25px;
  width: 25px;
`;

export default function Home() {
  return (
    <>
      <div className="top">
        <div className="left">
          <div className="profile">
            <img src={Brian} alt="Brian Illes" />
          </div>
          <div className="title">
            <h2>Software Developer</h2>
            <h3>Problem Solver · Builder</h3>
            <p>
              Skills: Javascript | Python | React | Redux | Node.js | Express |
              HTML | CSS | LESS/SASS
            </p>
          </div>
        </div>

        <div className="links">
          <a href="https://github.com/brilles">
            <GithubDark /> Github
          </a>
          <a href="https://www.linkedin.com/in/brian-illes/">
            <LinkedinDark /> Linkedin
          </a>
          <a href="https://twitter.com/brianilles">
            <TwitterDark /> Twitter
          </a>
        </div>
      </div>
      <div className="main-content">
        <h3>Projects</h3>
        <div className="card">Livesafe</div>
        <div className="card">SafeRoutes</div>
        <div className="card">Tabless Thursday</div>
      </div>
    </>
  );
}
