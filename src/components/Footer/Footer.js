import "./Footer.css"
import linkedin_icon from "../../imgs/linkedin_icon.png";
import github_icon from "../../imgs/github_icon.png";




function Footer(){


    return(
        <div id="Footer">
            <div className="footer-icon-container">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mitchellbrandonn/"><img className="footer-icon" src={linkedin_icon} alt="linkedin icon"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitchell-brandon"><img className="footer-icon" src={github_icon} alt="github icon"/></a>
            </div>
        </div>
    )
};


export default Footer;