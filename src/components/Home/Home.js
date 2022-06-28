import React, { useRef, useState, useEffect} from 'react';
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";

function Home() {
  const[landingVisible, setLandingVisible] = useState(true);
  const landingPage = useRef();
  
  const scrollHandler = () => {
    let getBound = landingPage.current.getBoundingClientRect();
    if (getBound.top >= -300) {
      setLandingVisible(true)
    } else {
      setLandingVisible(false)
    }
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

export default Home;
