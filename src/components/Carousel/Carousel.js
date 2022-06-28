import projectsJSON from "../../projects_data.json";
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import baseImage from "../../imgs/base_image.png"
import "./Carousel.css";


function Carousel(props){
  const [current, setCurrent] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  let length = imageArray.length;


  function next(){
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prev(){
    setCurrent(current === 0 ? length - 1: current - 1);
  }
  
  useEffect(()=>{
    for(let item of projectsJSON){
      if(props.tileId === item.id){
        setImageArray(item.images)
      }
    }
    setCurrent(0)
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
        <li> <img src={baseImage} className="base_image" alt="base slide white"/> </li>
          {
              imageArray.map( (item,index) => {
                return (
                  <li key={index} className={index === current? " slide active-slide" : "slide"}>
                    {index === current? <img className="slide-img" src={item} alt="" />: null}
                  </li>
                )
              })
          }
      </ul>

    </div>
        
  )
};


export default Carousel;

