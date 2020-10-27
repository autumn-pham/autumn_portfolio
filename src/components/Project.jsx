import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="card">
          <div className="card-header">Fighting Fit</div>
          <img src="" className="card-img-top" alt="..."/>
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark" role="button">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Fighting Fit Meetup</div>
          <img src="" className="card-img-top" alt="..."/>
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark" role="button">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Pinch of Salt</div>
          <img src="" class="card-img-top" alt="..."/>
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark" role="button">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">A Novel Idea</div>
          <img src="" className="card-img-top" alt="..."/>
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark" role="button">View Project</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
