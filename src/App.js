import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="nav-wrapper">
            <Navbar />
          </div>
          <div className="main-wrapper">Main</div>
          <div className="footer-wrapper">Footer</div>
        </header>
      </div>
    </Router>
  );
}

export default App;
