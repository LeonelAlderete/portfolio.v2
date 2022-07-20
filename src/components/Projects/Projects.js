import React from "react";
//ui
import "./projects.css";
import "./project-title.css";
import "./project-list.css";
import "./projects-animation.css";
import { AiFillGithub } from "react-icons/ai";
//Utils
import projectsData from "../../utils/projectsData";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="title">
        <h2>Mis proyectos</h2>
      </div>

      <div className="projects-list">
        {projectsData.map((item, index) => (
          <div className={`proyect-item item${index + 1}`} key={index}>
            {/* Imagen */}
            <div className="header">
              <img src={item.imageURL} alt="" />
            </div>

            <div className="body">
              <div className="card-title">
                <h3>{item.title}</h3>
              </div>

              <div className="card-description">
                <p>{item.description}</p>
              </div>

              <div className="card-buttons">
                {/* Ver demo */}
                {item.demoURL && (
                  <a
                    href={item.demoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="demo">Ver Demo</button>
                  </a>
                )}

                {/* Github */}
                <a
                  className="github"
                  href={item.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
