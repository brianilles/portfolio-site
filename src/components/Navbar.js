import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import Blogo from "../assets/b-logo.svg";
import styled from "styled-components";
import { Moon } from "styled-icons/boxicons-regular/Moon";

const MoonOutline = styled(Moon)`
  color: #000;
  height: 35px;
  width: 35px;
  transform: rotate(-20deg);
`;

export default function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <img src={Blogo} alt="B logo" />
      </div>
      <div className="center">
        <NavLink exact to="/" activeClassName="activeNav">
          HOME
        </NavLink>
        <NavLink to="/about" activeClassName="activeNav">
          ABOUT
        </NavLink>
        <NavLink to="/projects" activeClassName="activeNav">
          PROJECTS
        </NavLink>
        <NavLink to="/contact" activeClassName="activeNav">
          CONTACT
        </NavLink>
      </div>
      <div className="right">
        <MoonOutline />
      </div>
    </div>
  );
}
