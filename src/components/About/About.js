import "./About.css";
import about_img from "../../imgs/about_img2.png";

function About(){
  return(
    <div id="About">
      <div className="about-wrapper">
        <h1 className="about-statement-mobile statement"> Here's what I do...</h1>
        <div className="about-img-wrapper">
          <img className="about-img" src={about_img} alt="img of web developer"/>
        </div>

        <div className="about-content">
          {/* This h1 gets hidden for mobile version */}
          <h1 className="about-statement-desktop statement"> Here's what I do... </h1>
          <div className="about-skills-wrapper">
            <div className="about-skills-list">
              <p> JavaScript</p>
              <p> React</p>
              <p> Typescript</p>
              <p> Jinja</p>
              <p> Figma </p>
              <p> Python</p>
              <p> Django</p>
              <p> PostgreSQL</p>
              <p> Bash</p>
              <p> Gimp</p>
              <p> HTML </p>
              <p> CSS</p>
              <p> Git </p>
              <p> Heroku</p>
            </div>
          </div>
          <div className="about-underline underline"> </div>
          <p className="about-paragraph">
          Hey I’m Mitch, and I’m a full stack web developer. I have over three years of experience in designing products and building applications. 
          I love what I do! I’m an incredibly resilient individual with an immense amount of discipline and passion. I have a genuine sense of empathy, 
          encouragement, and inclusivity–in most of my previous lines of work I’ve often fulfilled roles in management and leadership. When I’m not 
          programming or designing the next project, I like to fish, camp, and learn new technologies. I’m dedicated to providing clean code, 
          beautiful designs, and excellent communication. 
            <br></br>
            <br></br>
            Whether you need a freelancer or a full time engineer, I’m the one for the job!
            </p>
        </div>
      </div>
    </div>
  )
};

export default About;