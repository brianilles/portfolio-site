import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <Link to="/">Brian Illes</Link>
      </div>
      <div className="right">
        <NavLink exact to="/" activeClassName="activeNav">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="activeNav">
          About
        </NavLink>
        <NavLink to="/blog" activeClassName="activeNav">
          Blog
        </NavLink>
      </div>
    </div>
  );
}
