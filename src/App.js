import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import "./scss/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
