import React from "react";
import "./Contact.scss";
import ContactForm from "../../comps/contactcomp/ContactForm";
import { MdOutlineMail } from "react-icons/md";
function Contact() {
  return (
    <div className="contact-parent parent">
      <div className="contact-container container">
        <div className="contact-left contact-body">
          {/* card 1 */}
          <div className="contact-card">
            <div className="heading">Dubai Office :</div>
            <div className="contact-card-box">
              
              <span>
                <MdOutlineMail />
              </span>{" "}
              <div className="contact-info">
              <h2 className="heading">Delaware Office</h2>
              info@axoncare.com
              </div>
            
            </div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
          </div>
          {/* card 2 */}
          <div className="contact-card">
            <div className="heading">Dubai Office :</div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
          </div>
          {/* card 3 */}
          <div className="contact-card">
            <div className="heading">Dubai Office :</div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
          </div>
        </div>
        <div className="contact-right contact-body">
          <ContactForm />
          <div className="contact-card">
            <div className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              info@axoncare.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
