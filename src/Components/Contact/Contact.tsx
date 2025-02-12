import Footer from "../../Footer/Footer"
import "./Contact.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Contact() {
  return (
    <>
      <section id="contact">
  
        <h1 className="section-header">Contact</h1>
      
        <div className="contact-wrapper">
      
          <div className="card">
            <h1 className="contactTitle">Get in Contact</h1>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text"></input>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text"></input>
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text"></input>
                </div>
              </div>

              <div className="col">
                <div className="form-group messageInput">
                  <label>Message</label>
                  <textarea></textarea>
                </div>
              </div>

              <div className="col">
                <input type="submit" value="Submit"></input>
              </div>
            </div>
        </div>
          
          
            <div className="direct-contact-container">

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