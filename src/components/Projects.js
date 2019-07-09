import React from "react";
import Tabs from "./Tabs";
import "../scss/Projects.scss";

export default function Projects() {
  return (
    <div>
      <div className="top">Projects</div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
