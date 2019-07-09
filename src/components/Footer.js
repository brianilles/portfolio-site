import React from "react";
import "../scss/Footer.scss";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";

const GithubLight = styled(Github)`
  color: #fff;
  height: 25px;
  width: 25px;
`;

const TwitterLight = styled(Twitter)`
  color: #fff;
  height: 25px;
  width: 25px;
`;

const LinkedinLight = styled(LinkedinSquare)`
  color: #fff;
  height: 25px;
  width: 25px;
`;

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <a href="https://github.com/brilles">
          <GithubLight />
        </a>
        <a href="https://www.linkedin.com/in/brian-illes/">
          <LinkedinLight />
        </a>
        <a href="https://twitter.com/brianilles">
          <TwitterLight />
        </a>
      </div>
      <div className="right">© 2019 Brian Illes</div>
    </div>
  );
}
