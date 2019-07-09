import React from "react";
import Tabs from "./Tabs";
import "../scss/About.scss";

export default function About() {
  return (
    <div>
      <div className="top">About</div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
