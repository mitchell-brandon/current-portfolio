import "./base.css";
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contact/Contact.js"

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
