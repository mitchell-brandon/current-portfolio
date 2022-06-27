import projectsJSON from "../../projects_data.json";
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import "./Carousel.css";


function Carousel(props){
  const [current, setCurrent] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  let length = imageArray.length;

  function getImageArray(){
    for(let item of projectsJSON){
      if(props.tileId === item.id){
        setImageArray(item.images)
      }
    }
  }

  function next(){
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prev(){
    setCurrent(current === 0 ? length - 1: current - 1);
  }
  
  useEffect(()=>{
    setCurrent(0)
    getImageArray()
  },[props.tileId])
  
  return(
    <div className="carousel">

      <button id="previous" className="carousel-button prev" onClick={prev}>
        <FontAwesomeIcon onClick={prev} className="left-arrow arrow" icon={faCaretLeft}/>
      </button>
      <button id="nex" className="carousel-button next" onClick={next}>
        <FontAwesomeIcon id="next" onClick={next} className="right-arrow arrow" icon={faCaretRight}/>
      </button>

      <ul className="carousel-ul">
          {
              imageArray.map( (item,index) => {
                return (
                  <li key={index} className={index === current? " slide active-slide" : "slide"}>
                    {index === current? <img className="slide-img" src={item} alt=""/>: null}
                  </li>
                )
              })
          }
      </ul>

    </div>
        
  )
};


export default Carousel;

