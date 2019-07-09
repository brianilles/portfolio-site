import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import Blogo from "../assets/b-logo.svg";

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
      </div>
      <div className="right">
        <NavLink to="/contact" activeClassName="activeNav">
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}
