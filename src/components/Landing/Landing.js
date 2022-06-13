import "./Landing.css"
function Landing(){

  return(
    <div id="Landing">
      <div className="landing-content-wrapper">
        <h1 className="landing-titles landing-title"> Mitchell <span>Roy</span></h1>
        <div className="landing-underline"></div>
        <div className="landing-subtitle-wrapper">
          <h3 className="landing-titles">UX</h3>
          <h3 className="landing-titles">&#38;</h3>
          <h3 className="landing-titles"> Web Developer</h3>
        </div>
      </div>

      <div className="landing-nav-wrapper">
        <ul className="landing-nav-bar">
          <li> <a className="landing-link"href=""> About </a> </li>
          <li> <a className="landing-link" href=""> Projects </a> </li>
          <li> <a className="landing-link" href=""> Contact </a> </li>
        </ul>
      </div>
    </div>
  )
};


export default Landing;