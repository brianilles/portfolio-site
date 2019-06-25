import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Blog from "./components/Blog.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <div className="body">
          <Route exact path="/" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
