import "./Projects.css";
import React, { useState } from 'react';
import projectsJSON from "../../projects_data.json";



function Tiles(props){
    const[pJSON] = useState(projectsJSON);
    let selectedValue = props.selectedValue

    return(
        <div className="project-tiles-container">
        {
            pJSON.filter(item =>{
                let returnItem;
                if(selectedValue === "all"){
                   returnItem = pJSON;
                } else if(selectedValue === item.type){
                    returnItem = item
                }
                return returnItem
            })
            .map(project =>
            <div className="project-tile" key={project.id}>
              <h1 className="tile-title"> {project.name}</h1>
              <div className="tile-thumbnail-wrapper"> 
                <img className="tile-thumbnail" id={project.id}onClick={props.handleClick} src={project.thumbnail} alt={project.name}/>
                <div className="project-link-container">
                  <p className="project-link-wrapper">
                    <a className="project-link" target="_blank" rel="noopener noreferrer" href={project.link}>{project.link? project.name: ""}</a>
                  </p>
                  <p className="project-type">{project.type}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
};

export default Tiles;