import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <Navbar />
        </div>
        <div className="main">Main</div>
        <div className="footer">Footer</div>
      </header>
    </div>
  );
}

export default App;
