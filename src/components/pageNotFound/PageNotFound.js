import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound(){
	return(
		<div id="PageNotFound" className="four-page">
			<h1 className="four-statement">Uh-uh I seemed to have lost you!</h1>
			<h1 className="four">404</h1>
			<p className="four-action"> 
				No worries :&#41; try headinng back to 
				<Link to="/"className="four-link">
					<span className="mitchell">Mitchell</span>
					<span className="roy">Roy</span>
				</Link>
			</p>
		</div>
	)
}


export default PageNotFound;