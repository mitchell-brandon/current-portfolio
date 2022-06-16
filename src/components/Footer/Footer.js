import "./Footer.css"
import linkedin_icon from "../../imgs/linkedin_icon.png";
import github_icon from "../../imgs/github_icon.png";




function Footer(){


    return(
        <div id="Footer">
            <div className="footer-icon-container">
                <img className="footer-icon" src={linkedin_icon} alt="linkedin icon"/>
                <img className="footer-icon" src={github_icon} alt="github icon"/>
            </div>
        </div>
    )
};


export default Footer;