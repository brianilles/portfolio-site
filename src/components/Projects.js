import React from "react";
import Profile from "./Profile.js";
import "../styles/Projects.scss";

export default function Projects() {
  return (
    <div>
      <Profile />
      <h2 className="title">Projects</h2>
      <div className="projects-main">
        <div className="left">
          <div className="project-card">one</div>
          <div className="project-card">two</div>
          <div className="project-card">three</div>
        </div>

        <div className="right">
          <h2 className="title">What I'm Reading</h2>
          <div className="recent">one</div>
          <div className="recent">two</div>
          <div className="recent">three</div>
        </div>
      </div>
    </div>
  );
}
