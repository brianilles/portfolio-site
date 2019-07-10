import React from "react";
import Tabs from "./Tabs";
import "../scss/Projects.scss";
import Livesafe from "../assets/livesafe.png";
import Saferoutes from "../assets/saferoutes.png";
import Tablessthursday from "../assets/tablessthursday.png";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";

const GithubDark = styled(Github)`
  color: #0066ff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  margin-right: 5px;
`;

export default function Projects() {
  return (
    <div>
      <div className="top project">
        <div className="card">
          <h3>Live Safe</h3>
          <img src={Livesafe} alt="" />
          <p className="date">May 2019</p>
          <p>
            Livesafe is a web application that provides home buyers and renters
            a 1-stop shop for assessing and comparing natural disaster risks for
            any location in the U.S.
          </p>
          <a href="https://livesafe.services">https://livesafe.services</a>
          <a href="https://github.com/labs12-should-i-live-here">
            <GithubDark /> See the repository
          </a>
        </div>
        <div className="card">
          <h3>Safe Routes</h3>
          <img src={Saferoutes} alt="" />
          <p className="date">April 2019</p>
          <p>
            Saferoutes is a web application that informs drivers about accidents
            in their area and when they occured.
          </p>
          <a href="https://safe-routes.netlify.com">
            https://safe-routes.netlify.com
          </a>
          <a href="https://github.com/safe-routes/Build-SafeRoutes-BE">
            <GithubDark />
            See the repository
          </a>
        </div>
        <div className="card">
          <h3>Tabless Thursday</h3>
          <img src={Tablessthursday} alt="" />
          <p className="date">February 2019</p>
          <p>
            Tabless Thursday is an application that helps users organize their
            many tabs in one place.
          </p>
          <a href="https://tablessthursday.netlify.com">
            https://tablessthursday.netlify.com
          </a>
          <a href="https://github.com/tabless-thursday/Tabless-Thursday-Brian">
            <GithubDark /> See the repository
          </a>
        </div>
      </div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
