import React from "react";
import "../styles/Navbar.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github } from "styled-icons/boxicons-logos/Github";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";

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

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="top">
        <NavLink exact to="/">
          <h1 className="name">Brian Illes</h1>
        </NavLink>
        <div className="nav-right">
          <NavLink exact to="/" activeClassName="activeNavLink">
            Projects
          </NavLink>
          <NavLink to="/blog" activeClassName="activeNavLink">
            Blog
          </NavLink>
          <NavLink to="/about" activeClassName="activeNavLink">
            About
          </NavLink>
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
  );
}
