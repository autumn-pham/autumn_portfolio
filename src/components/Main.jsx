import React from "react";
import Project from "./Project";

class Main extends React.Component {
  render() {
    return (
      <div className="main col-9">
        <hr/><h4 id="about">about autumn</h4><hr/>
        <p>As a full-stack developer, I bring x, y, and z to my work.</p>
        <hr/><h4 id="projects">projects</h4><hr/>
        <Project/>
        <hr/><h4>experience</h4><hr/>
        <h6>Skills</h6>
        <span className="badge badge-pill badge-dark">html</span> <span className="badge badge-pill badge-dark">css</span> <span className="badge badge-pill badge-dark">responsive design</span> <span className="badge badge-pill badge-dark">object-oriented design</span> <span className="badge badge-pill badge-dark">javascript</span>  <span className="badge badge-pill badge-dark">react</span> <span className="badge badge-pill badge-dark">jquery</span> <span className="badge badge-pill badge-dark">node.js</span> <span className="badge badge-pill badge-dark">express</span> <span className="badge badge-pill badge-dark">php</span> <span className="badge badge-pill badge-dark">mongodb</span> <span className="badge badge-pill badge-dark">mongoose</span> <span className="badge badge-pill badge-dark">postgresql</span>
        <p>View my full resume <a href="#">here</a>.</p>
      </div>
    );
  }
}

export default Main;
