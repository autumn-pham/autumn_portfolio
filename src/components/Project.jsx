import React from "react";
import FightingFit from "../assets/fightingfit.png";
import FightingFitMeetup from "../assets/fightingfitmeetup.png";
import PinchofSalt from "../assets/pinchofsalt.png";
import NovelIdea from "../assets/anovelidea.png";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="card">
          <div className="card-header">Fighting Fit<span className="link-btn"><a href="https://fightingfit.herokuapp.com" className="btn btn-outline-dark"  target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a></span></div>
          <img src={FightingFit} className="card-img-top" alt="fighting fit site"/>
          <div className="card-img-overlay">
          </div>
        </div>
        <div className="card">
          <div className="card-header">Fighting Fit Meetup<span className="link-btn"><a href="https://fightfitmeetup.herokuapp.com" className="btn btn-outline-dark" role="button" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a></span></div>
          <img src={FightingFitMeetup} className="card-img-top" alt="fighting fit meetup site"/>
          <div className="card-img-overlay">

          </div>
        </div>
        <div className="card">
          <div className="card-header">Pinch of Salt<span className="link-btn"><a href="https://pinch-of-salt.herokuapp.com" className="btn btn-outline-dark" role="button" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a></span></div>
          <img src={PinchofSalt} className="card-img-top" alt="pinch of salt site"/>
          <div className="card-img-overlay">

          </div>
        </div>
        <div className="card">
          <div className="card-header">A Novel Idea<span className="link-btn"><a href="https://infinite-stream-72673.herokuapp.com" className="btn btn-outline-dark" role="button" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a></span></div>
          <img src={NovelIdea} className="card-img-top" alt="..."/>
          <div className="card-img-overlay">

          </div>
        </div>
      </div>
    );
  }
}

export default Project;
