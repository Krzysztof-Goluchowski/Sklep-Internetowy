import "./contact.css";
import phone from "../photos/phone.png";
import address from "../photos/address.png";
import mail from "../photos/mail.png";
import {ADDRESS} from "../address";

function ContactContent() {
    return (
      <div className="contactContainer">
          <h1 className="touch">LET'S GET IN TOUCH!</h1>
          <div className="contactContent">

              <div>
                  <div className="contactDetails">
                      <img className="contactIcon" src={phone}/>
                      <h3 className="contactTitle">Call us</h3>
                      <p className="contactText">123 456 789</p>
                  </div>
                  <div className="footer"/>
              </div>
              <div>
                  {/*<div className="contactDetails">*/}
                      <a
                          href={ADDRESS}
                          target="_blank"
                          rel="noreferrer"
                          className="contactDetails"
                      >
                          <img className="contactIcon" src={address}/>
                          <h3 className="contactTitle">Meet us</h3>
                          <p className="contactText">Kawiory 21, Kraków</p>
                      </a>
                  {/*</div>*/}
                  <div className="footer"/>
              </div>
              <div>
                  <div className="contactDetails">
                      <img className="contactIcon" src={mail}/>
                      <h3 className="contactTitle">Write to us</h3>
                      <p className="contactText">silka@byki.com</p>
                  </div>
                  <div className="footer"/>
              </div>
          </div>
      </div>
    );
}

export default ContactContent;