import React from "react";
import Autumn from "../assets/autumn_headshot.jpg";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar col-3">
          <img src={Autumn} alt="autumn photo" className="autumn-img"/>
          <h3 className="name">Autumn Pham</h3>
          <span className="email"><i className="far fa-envelope"></i> ph.autumn@gmail.com</span><br/>
          <a href="#about">About</a><br/>
          <a href="#projects">Projects</a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/autumn-pham" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a><br/>
            <a href="https://github.com/autumn-pham" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-2x"></i></a><br/>
            <a href="https://github.com/autumn-pham" target="_blank" rel="noreferrer"><i className="fas fa-file fa-2x"></i></a><br/>

          </div>
        </div>
    );
  }
}

export default Sidebar;
