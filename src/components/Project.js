import React from "react";
import Technologies from "./Technologies";

const Project = props => {
  return (
    <div className="project flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.source} alt={props.alt} />
        </div>

        <div className="project-container flip-card-back">
          <h3>{props.title}</h3>
          <p>{props.technologies}</p>
          <p>{props.description}</p>
          {props.link ? (
            <a href={props.link} className="project-site-link" target="_blank">
              Click me to see website
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
