import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer"
import "./Contact.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import "animate.css";


function Contact() {
 

  return (
    <>
      <section className="contact" id="contact">

        <div className="contact-wrapper">
      
          <div className="card animate__animated animate__backInUp">
            <h1 className="contactTitle animate__animated animate__backInRight">Contact Me!</h1>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label className="animate__animated animate__backInLeft">Name</label>
                  <input className="animate__animated animate__backInRight" type="text" placeholder="Your name"></input>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label className="animate__animated animate__backInLeft">Email</label>
                  <input className="animate__animated animate__backInRight" type="text" placeholder="Your email"></input>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label className="animate__animated animate__backInLeft">Phone</label>
                  <input className="animate__animated animate__backInRight" type="text" placeholder="Your phone number"></input>
                </div>
              </div>

              <div className="col">
                <div className="form-group messageInput">
                  <label className="animate__animated animate__backInLeft">Message</label>
                  <textarea className="message-box animate__animated animate__backInRight" placeholder="Type your message here."></textarea>
                </div>
              </div>

              <div className="col">
                <input className="animate__animated animate__backInLeft" type="submit" value="Submit"></input>
              </div>
            </div>
        </div>
          
          
            <div className="direct-contact-container animate__animated animate__backInDown">

              <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Dayton, OH</span></i></li>
                
                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-937-729-8022" title="Give me a call">(937) 729-8022</a></span></i></li>
                
                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">e.gutierrezrivera02@gmail.com</a></span></i></li>
                
              </ul>

              <hr></hr>
              <ul className="social-media-list">
                <li onClick={() => window.open("https://github.com/EmmanuelGR02", "_blank")}>
                  <i className="fab fa-github"></i>
                </li>
                <li onClick={() => window.open("https://www.linkedin.com/in/emmanuel-gutierrez-rivera-851797300/", "_blank")}>
                  <i className="fab fa-linkedin"></i>
                </li>
                <li onClick={() => window.open("https://www.tiktok.com/@code.clpz", "_blank")}>
                  <i className="fab fa-tiktok"></i>
                </li>
                <li onClick={() => window.open("https://www.instagram.com/emmanuel.g.707/", "_blank")}>
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>

              <hr></hr>
            </div>
          
        </div>
        
      </section>  

      <Footer />
    </>
  )
}

export default Contact