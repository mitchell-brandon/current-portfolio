import "./Projects.css";
import React, { useState } from 'react';
import projectsJSON from "../../projects_data.json";

function Projects() {
  const[pJSON, setPJSON] = useState(projectsJSON)

  console.log(pJSON);

  return(
    <div id="Projects">
      <h1 className="projects-statement"> Explore my projects!</h1>
      <div className="underline-select-wrapper">
        <label className="projects-label" for="prjects">Sort:
          <select className="projects-select" id="sort" name="sort">
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="knacks">Knick Knacks</option>  
          </select>
        </label>
        <div className="projects-underline"></div>
      </div>

      <div className="project-tiles-container">
        {
          pJSON.map(project =>
            <div className="project-tile">
              <h1 className="tile-title"> {project.name}</h1>
              <div className="tile-thumbnail-wrapper"> 
                <img className="tile-thumbnail" src={project.thumbnail} alt={project.name}/>
                <div className="project-link-container">
                  <p className="project-link-wrapper"> <a className="project-link" href={project.link}>{project.link}</a> </p>
                  <p className="project-type">{project.type}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
};


export default Projects;