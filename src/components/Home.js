import React from "react";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Zap } from "styled-icons/boxicons-solid/Zap";
import { Email } from "styled-icons/material/Email";
import { Calendar } from "styled-icons/boxicons-regular/Calendar";
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
            <h2>Software Developer</h2>
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
          <p className="description">coming soon</p>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>Safe Routes</h4>
            <p className="month">
              <span>MARCH 2019</span>
              <CalendarDark />
            </p>
          </div>
          <p className="description">coming soon</p>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>Tabless Thursday</h4>
            <p className="month">
              <span> FEBRUARY 2019</span>
              <CalendarDark />
            </p>
          </div>
          <p className="description">coming soon</p>
        </div>
      </div>
    </>
  );
}
