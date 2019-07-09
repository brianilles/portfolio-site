import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import "./scss/App.scss";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-wrapper">
          <Navbar />
        </div>
        <div className="main-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
