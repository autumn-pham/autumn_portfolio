import React from "react";
import FightingFit from "../assets/fightingfit.png";
import FightingFitMeetup from "../assets/fightingfitmeetup.png";
import PinchofSalt from "../assets/pinchofsalt.png";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="card">
          <div className="card-header">Fighting Fit</div>
          <img src={FightingFit} className="card-img-top" alt="fighting fit site"/>
          <div className="card-body">
            <a href="https://fightingfit.herokuapp.com" className="btn btn-outline-dark" role="button" target="_blank">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Fighting Fit Meetup</div>
          <img src={FightingFitMeetup} className="card-img-top" alt="fighting fit meetup site"/>
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark" role="button" target="_blank">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Pinch of Salt</div>
          <img src={PinchofSalt} className="card-img-top" alt="pinch of salt site"/>
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark" role="button" target="_blank">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">A Novel Idea</div>
          <img src="" className="card-img-top" alt="..."/>
          <div className="card-body">
            <a href="https://pinch-of-salt.herokuapp.com/" className="btn btn-outline-dark" role="button" target="_blank">View Project</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
