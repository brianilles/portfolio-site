import React from "react";
import "./scss/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <div className="main-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
