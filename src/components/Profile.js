import React from "react";
import "../styles/Profile.scss";
import Brian from "../assets/brian-illes.jpg";
import { Github } from "styled-icons/boxicons-logos/Github";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import styled from "styled-components";
const GithubDark = styled(Github)`
  color: #000;
  height: 20x;
  width: 20px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const LinkedinDark = styled(Linkedin)`
  color: #000;
  height: 20px;
  width: 20px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const TwitterDark = styled(Twitter)`
  color: #000;
  height: 20px;
  width: 20px;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;
export default function Profile() {
  return (
    <>
      <div className="Profile">
        <div className="profile-right">
          <img src={Brian} alt="Brian Illes" />
          <div>
            <h2>Software Developer</h2>
            <h4>Problem Solver · Builder</h4>
          </div>
        </div>

        <div className="bottom">
          <a href="https://github.com/brilles">
            <GithubDark />
          </a>
          <a href="https://www.linkedin.com/in/brian-illes/">
            <LinkedinDark />
          </a>
          <a href="https://twitter.com/brianilles">
            <TwitterDark />
          </a>
          <span> | brianrilles@gmail.com</span>
        </div>
      </div>
    </>
  );
}
