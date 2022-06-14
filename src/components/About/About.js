import "./About.css";
import about_img from "../../imgs/about_img.png";

function About(){
  return(
    <div id="About">
      <div className="about-wrapper">
      <h1 className="about-statement-mobile"> Here's what I do...</h1>
      <div className="about-img-wrapper">
        <img className="about-img" src={about_img} alt="img of web developer"/>
      </div>

      <div className="about-content">
        {/* This h1 gets hidden for mobile version */}
        <h1 className="about-statement-desktop"> Here's what I do... </h1>
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
        <div className="about-underline"> </div>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus condimentum 
          ante ut lobortis. Pellentesque pellentesque pharetra nulla, eu ultrices justo 
          consectetur vel. Aliquam in nunc ut urna gravida hendrerit quis et dolor. 
          Nullam ut metus mattis, fringilla tortor at, pellentesque nibh. Etiam interdum 
          id eros id lobortis. Morbi eu felis fringilla, fringilla nisi ac, laoreet erat.
          Mauris volutpat neque ac semper ultricies. Fusce ac feugiat nulla. Vivamus urna dui, 
          feugiat eget nisi et, gravida rhoncus magna. Praesent pellentesque lacinia leo, 
          ut sagittis ex commodo sed. Aliquam lacinia, mauris at dictum cursus, 
          odio quam pretium urna, non gravida ex ipsum a mauris. Aliquam in felis sit 
          amet quam tincidunt maximus ac ac lacus. Nam ipsum magna, tincidunt vel nulla 
          nec, finibus interdum turpis. Duis lobortis nisi elit, nec bibendum ante molestie quis.
          Integer iaculis, ipsum quis maximus tristique, ante nisl dignissim velit, eget dignissim 
          lacus nisi quis eros. Nulla euismod enim nec molestie lacinia.
        </p>
      </div>
      </div>
    </div>
  )
};

export default About;