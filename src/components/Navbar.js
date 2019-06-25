import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import B from "../assets/apple-touch-icon.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        <img src={B} alt="B logo" />
      </div>
      <div className="right">
        <NavLink exact to="/" activeClassName="activeNav">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="activeNav">
          Projects
        </NavLink>
        <NavLink to="/about" activeClassName="activeNav">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="activeNav">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
