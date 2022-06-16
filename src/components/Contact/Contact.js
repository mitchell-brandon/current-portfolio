import "./Contact.css";

function Contact(){

  return(
    <div id="Contact">
      <h1 className="contact-statement"> Wanna team up? </h1>

      <form className="contact-form">
        <div className="contact-form-content">

          <div className="contact-input-wrapper fullname-wrapper">
            <label className="contact-form-label" htmlFor="fullname"> Full Name</label>
            <input className="contact-input" id="fullname" type="text" name="fullname"/>
          </div>

          <div className="contact-input-wrapper email-wrapper">
            <label className="contact-form-label" htmlFor="email"> Email</label>
            <input className="contact-input" id="email" type="email" name="email"/>
          </div>
        </div>
          <div className="contact-input-wrapper">
            <label className="contact-form-label" htmlFor="contact-message"> Message</label>
            <textarea className="contact-input contact-textarea" id="contact-message" name="contact-message"/>
          </div>

        

        <button className="contact-submit-button">Send</button>
      </form>

    </div>
  )
};


export default Contact;