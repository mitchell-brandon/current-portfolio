import "./base.css";
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
