import React from "react";
import Project from "./Project";

class Main extends React.Component {
  render() {
    return (
      <div className="main col-9">
        <hr/><h3 id="about">about autumn</h3><hr/>
        <p>As a full-stack developer, I bring x, y, and z to my work.</p>
        <hr/><h3 id="projects">projects</h3><hr/>
        <Project/>
        <hr/><h3 id="experience">experience</h3><hr/>

        <p>View my full resume <a href="#">here</a>.</p>
      </div>
    );
  }
}

export default Main;
