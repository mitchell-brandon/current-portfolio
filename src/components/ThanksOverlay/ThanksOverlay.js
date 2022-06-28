import "./ThanksOverlay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';



function ThanksOverlay(props){

    return(
        <div id="ThanksOverlay" className={props.emailSuccess? "thanks-overlay": "thanks-overlay display-none"}>
            <FontAwesomeIcon className="overlay-x" onClick={props.handleClick} icon={faXmark} />

            <h1 className="thanks-title"> Thank You!</h1>
            <div className="thanks-content-wrapper">
                <p className="thanks-message"> 
                    Thank you for reaching out, I'm excited to see what we can build! 
                    <br></br>
                    I'll respond to your message as soon as possible.
                </p>

                <p className="thanks-closing"> 
                    Sincerely,
                    <br></br>
                    <span className="thanks-mitchell"> Mitchell </span>
                    <span className="thanks-roy">Roy</span>
                </p>
            </div>
        
        </div>
    )
};

export default ThanksOverlay;