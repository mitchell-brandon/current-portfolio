import"./TileOverlay.css"
import projectsJSON from "../../projects_data.json";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

function TileOverlay(props){
  

  return(
    <div id="TileOverlay" className={`${props.tileClicked? "": "display-none"}`}>
      <div className="overlay-x-wrapper">
        <FontAwesomeIcon className="overlay-x" onClick={props.handleClick} icon={faXmark} />
      </div>

      <Carousel
      // props coming from projects
        tileId={props.tileId}
        tileClicked={props.tileClicked}
      />

      {
        projectsJSON.filter( item => {
          let projectId;
          if(props.tileId === item.id){
            projectId = item.id;
          }
          return projectId
        })
        .map( (project, index) => {
          return(
            <div key={index}>
              <p className="tileoverlay-description">
                {project.description}
              </p>

              <div className="tileoverlay-links-container">
                <p className="tileoverlay-link-wrapper">
                  <a className="tileoverlay-link" target="_blank" rel="noopener noreferrer" href={project.link}>{project.link? project.name: ""}</a>
                </p>
                <p className="tileoverlay-project-type">{project.type}</p>
              </div>
            </div>
          )
        })
      }

    </div>
  )
};

export default TileOverlay;