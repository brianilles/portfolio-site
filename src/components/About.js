import React from "react";
import Tabs from "./Tabs";
import "../scss/About.scss";
import Brian from "../assets/brian.png";
import styled from "styled-components";
import { Location } from "styled-icons/evil/Location";
import { Link } from "react-router-dom";

const LocationDark = styled(Location)`
  color: #000;
  height: 35px;
  width: 35px;
`;

export default function About() {
  return (
    <div>
      <div className="top">
        <div className="middle">
          <div className="profile-left">
            <img src={Brian} alt="Brian Illes" />
            <div className="location">
              <LocationDark /> <p>California</p>
            </div>
          </div>
          <div className="profile-right">
            <h2>Hi, I'm Brian</h2>
            <p>
              I’m a full-stack software developer who is constanting creating
              and learning. I write readable and performance-driven code.{" "}
            </p>
            <p className="currently">
              Currently - finishing up Lambda School’s Computer Science and Web
              Development Program
            </p>
            <Link to="/projects">See what I've been working on</Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
