import "./PageNotFound.css";

function PageNotFound(){
	return(
		<div id="PageNotFound" className="four-page">
			<h1 className="four-statement">Uh-uh I seemed to have lost you!</h1>
			<h1 className="four">404</h1>
			<p className="four-action"> 
				No worries :&#41; try headinng back to 
				<a href="#Landing" className="four-link">
					<span className="mitchell">Mitchell</span>
					<span className="roy">Roy</span>
				</a>
			</p>
		</div>
	)
}


export default PageNotFound;