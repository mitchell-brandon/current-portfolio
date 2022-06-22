import "./Projects.css";
import Tiles from "../Tiles/Tiles.js";
import TileOverlay from "../TileOverlay/TileOverlay";
import React, { useState } from 'react';

function Projects() {
 const[selectedValue, setSelectedValue] = useState("all")
 const[tileClicked, setTileClicked] = useState(false)
 const[tileId, setTileId] = useState(0)

  function handleClick(ev){
    setTileClicked(!tileClicked);
    setTileId(ev.target.id)
  }

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

      <Tiles 
        handleClick={handleClick}
        selectedValue={selectedValue}
      />
      <TileOverlay 
        tileClicked={tileClicked} 
        handleClick={handleClick}
        tileId={tileId}
      />
    </div>
  )
};


export default Projects;