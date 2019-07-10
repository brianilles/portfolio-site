import React from "react";
import Tabs from "./Tabs";
import "../scss/Projects.scss";
import Livesafe from "../assets/livesafe.png";
import Saferoutes from "../assets/saferoutes.png";
import Tablessthursday from "../assets/tablessthursday.png";

export default function Projects() {
  return (
    <div>
      <div className="top project">
        <div className="card">
          <h3>Live Safe</h3>
          <img src={Livesafe} alt="" />
          <p>Date</p>
          <p>Description</p>
          <a href="" />
          <p>Repo</p>
        </div>
        <div className="card">
          <h3>Safe Routes</h3>
          <img src={Saferoutes} alt="" />
          <p>Date</p>
          <p>Description</p>
          <a href="" />
          <p>Repo</p>
        </div>
        <div className="card">
          <h3>Tabless Thursday</h3>
          <img src={Tablessthursday} alt="" />
          <p>Date</p>
          <p>Description</p>
          <a href="" />
          <p>Repo</p>
        </div>
      </div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
