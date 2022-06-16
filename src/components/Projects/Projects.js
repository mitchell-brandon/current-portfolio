import "./Projects.css";
import Tiles from "./Tiles.js";
import React, { useState } from 'react';

function Projects() {
 const[selectedValue, setSelectedValue] = useState("all")

function handleChange(ev){
  let optionValue = ev.target.value
  setSelectedValue(optionValue)
}

  return(
    <div id="Projects">
      <h1 className="projects-statement"> Explore my projects!</h1>
      <div className="underline-select-wrapper">

        {/* selection dropdown */}
        <label className="projects-label" htmlFor="prjects">Sort:
          <select onChange={handleChange} className="projects-select" id="sort" name="sort">
            <option value="all">All</option>
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="knick-knacks">Knick Knacks</option>  
          </select>
        </label>
        
        <div className="projects-underline"></div>
      </div>

      <Tiles selectedValue={selectedValue}/>

    </div>
  )
};


export default Projects;