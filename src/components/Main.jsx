import React from "react";
import Project from "./Project";

class Main extends React.Component {
  render() {
    return (
      <div className="main col-9">
        <h5 id="about">About Autumn</h5><hr/>
        <p>As a full-stack developer, I bring x, y, and z to my work.</p>
        <h5 id="projects">Projects</h5><hr/>
        <Project/>
        <h5>Experience</h5><hr/>
        <p>View my full resume <a href="#">here</a>.</p>
      </div>
    );
  }
}

export default Main;
