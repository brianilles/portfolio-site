import React from "react";
import Tabs from "./Tabs.js";
import "../scss/Home.scss";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";

const GithubDark = styled(Github)`
  color: #000;
  height: 25px;
  width: 25px;
`;

export default function Home() {
  return (
    <div>
      <div className="top">
        <h1>Brian Illes</h1>
        <h2>Full-Stack Software Developer</h2>
        <a className="home" href="https://github.com/brilles">
          <GithubDark /> GitHub
        </a>
      </div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
