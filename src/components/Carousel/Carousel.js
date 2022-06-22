import projectsJSON from "../../projects_data.json";
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import "./Carousel.css";


function Carousel(props){
  const [current, setCurrent] = useState(0); //lifted state for Carousel


  let length;
  function testFunction(index){
    length = index;
  }

  function handleClick(ev){
    const eventTarget = ev.target.id
    if( eventTarget === "next"){
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else {
      setCurrent(current === 0 ? length - 1: current - 1);
    }
  }
  
  useEffect(()=>{
    setCurrent(0)
  },[props.tileClicked])
  return(
    <div className="carousel">

      <button id="previous" className="carousel-button prev" onClick={handleClick}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <button id="next" className="carousel-button next" onClick={handleClick}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>

      <ul className="carousel-ul">
          {
            projectsJSON.filter( item => {
              let projectId;
              if(props.tileId === item.id){
                projectId = item.id;
                testFunction(item.images.length)
              }
              return projectId
            })
            .map(project =>
              project.images.map( (item,index) => {
                return (
                  <li key={index} className={index === current? " slide active-slide" : "slide"}>
                    {index === current? <img className="slide-img" src={item} alt=""/>: null}
                  </li>
                )
              })
            )
          }
      </ul>

    </div>
        
  )
};


export default Carousel;

