// https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190 
// thats a resource for using emailJS
import "./Contact.css";
import React, {useState, useEffect} from 'react';
import ThanksOverlay from "../ThanksOverlay/ThanksOverlay";

import { send } from 'emailjs-com';

function Contact(){
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    email_address: '',
  });
  const[emailSuccess, setEmailSeuccess] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_9k5indx',
      'template_ehnbzfh',
      toSend,
      '9ahWFkgNdaHgI9Ke-'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          to_name: '',
          message: '',
          email_address: '',
        })
        setEmailSeuccess(true)
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setEmailSeuccess(false);
      });
  };
  
  function handleClick(){
    setEmailSeuccess(false)
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend)
  };


  return(
    <div id="Contact">
      <h1 className="contact-statement"> Wanna team up? </h1>

      <form method="post" className="contact-form" onSubmit={onSubmit}>
        <div className="contact-form-content">

          <div className="contact-input-wrapper fullname-wrapper">
            <label className="contact-form-label" htmlFor="fullname"> Full Name</label>
            <input
              className="contact-input" 
              type='text'
              name='from_name'
              placeholder='Full Name'
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-input-wrapper email-wrapper">
            <label className="contact-form-label" htmlFor="email"> Email</label>
            <input 
              className="contact-input"  
              type="email" 
              name="email_address"
              value={toSend.email_address} 
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact-input-wrapper">
          <label className="contact-form-label" htmlFor="contact-message"> Message</label>
          <textarea
            className="contact-input contact-textarea" 
            type='text'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
          />
        </div>

        

        <button type="submit" className="contact-submit-button">Send</button>
      </form>

    <ThanksOverlay
      emailSuccess={emailSuccess}
      handleClick={handleClick}
    />

    </div>
  )
};


export default Contact;