import React from "react";
import "../styles/Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLink exact to="/">
        <h1>Brian Illes</h1>
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
  );
}
