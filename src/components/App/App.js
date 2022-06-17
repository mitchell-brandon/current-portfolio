import "./base.css";
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
import React, { useRef, useState, useEffect} from 'react'

function App() {
  const[landingVisible, setLandingVisible] = useState(false);
  const landingPage = useRef();
  
  const scrollHandler = () => {
    console.log(landingPage.current.getBoundingClientRect());
    let getBound = landingPage.current.getBoundingClientRect();
    if (getBound.top >= -300) {
      console.log('landing is visible');
      setLandingVisible(true)
    } else {
      console.log('landing is not visible');
      setLandingVisible(false)
    }
    console.log(landingVisible);
  };
  

  useEffect(() => {
    window.onscroll = () =>{
      scrollHandler();
    }
  });


  return (
    <div className="app">
      <div ref={landingPage}>
        <Landing landingVisible={landingVisible}/>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
