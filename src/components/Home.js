import React from "react";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Zap } from "styled-icons/boxicons-solid/Zap";
import { Email } from "styled-icons/material/Email";
import { Calendar } from "styled-icons/boxicons-regular/Calendar";
import Brian from "../assets/brian.JPG";
import Livesafe from "../assets/livesafe.png";
import Saferoutes from "../assets/saferoutes.png";
import TablessThursday from "../assets/tabless-thursday.png";
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

const EmailDark = styled(Email)`
  color: #000;
  height: 20px;
  width: 20px;
`;

const ZapDark = styled(Zap)`
  color: #000;
  height: 20px;
  width: 20px;
`;

const CalendarDark = styled(Calendar)`
  color: #000;
  height: 20px;
  width: 20px;
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
            <h2>Full-Stack Web Developer</h2>
            <p>
              <ZapDark /> Skills: Javascript | Python | React | Redux | Node.js
              | Express | HTML | CSS | LESS/SASS
            </p>
            <p>
              <EmailDark /> brianrilles@gmail.com
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
        <div className="card">
          <div className="card-title">
            <h4>Live Safe</h4>
            <p className="month">
              <span>APRIL 2019</span>
              <CalendarDark />
            </p>
          </div>
          <div className="description">
            <img src={Livesafe} alt="Livesafe" />
            <p>
              Livesafe is a web application that provides home buyers and
              renters a 1-stop shop for assessing and comparing natural disaster
              risks for any location in the U.S. View it live here:
              <a href="https://livesafe.services/">https://livesafe.services</a>
              <a href="https://github.com/labs12-should-i-live-here">
                <GithubDark />
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>Safe Routes</h4>
            <p className="month">
              <span>MARCH 2019</span>
              <CalendarDark />
            </p>
          </div>
          <div className="description">
            <img src={Saferoutes} alt="Saferoutes" />
            <p>
              Saferoutes is a web application that informs drivers about
              accidents in their area and when they occured. View it live here:
              <a href="https://safe-routes.netlify.com">
                https://safe-routes.netlify.com
              </a>
              <a href="https://github.com/safe-routes/Build-SafeRoutes-BE">
                <GithubDark />
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>Tabless Thursday</h4>
            <p className="month">
              <span> FEBRUARY 2019</span>
              <CalendarDark />
            </p>
          </div>
          <div className="description">
            <img src={TablessThursday} alt="Tabless Thursday" />
            <p>
              Tabless Thursday is an application that helps users organize their
              many tabs in one place. View it live here:
              <a href="https://tablessthursday.netlify.com">
                https://tablessthursday.netlify.com
              </a>
              <a href="https://github.com/tabless-thursday/Tabless-Thursday-Brian">
                <GithubDark />
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/brilles">
          <GithubDark />
        </a>
        <a href="https://www.linkedin.com/in/brian-illes/">
          <LinkedinDark />
        </a>
        <a href="https://twitter.com/brianilles">
          <TwitterDark />
        </a>
      </footer>
    </>
  );
}
