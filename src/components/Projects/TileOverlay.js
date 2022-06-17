import "./Projects.css"
import"./TileOverlay.css"
// import React, { useState } from 'react';
import projectsJSON from "../../projects_data.json";

function TileOverlay(props){

  return(
    <div id="TileOverlay" className={`${props.tileClicked? "": "display-none"}`}>
      <div className="overlay-x-wrapper">
        <p className="overlay-x" onClick={props.handleClick}> X </p>
      </div>
      <ul className="carousel-ul">
        {
          projectsJSON.filter( item => {
            let projectId;
            if(props.tileId === item.id){
              projectId = item.id;
            }
            return projectId
          })
          .map(project =>
            project.images.map( item => 
              <li><img className="slide-img" src={item} alt=""/></li>
              )
            )
        }
      </ul>
    </div>
  )
};

export default TileOverlay;