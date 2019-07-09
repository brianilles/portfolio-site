import React from "react";
import Tabs from "./Tabs.js";
import "../scss/Home.scss";

export default function Home() {
  return (
    <div>
      <div className="top">
        <h1>Brian Illes</h1>
        <h2>Full-Stack Software Developer</h2>
      </div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
