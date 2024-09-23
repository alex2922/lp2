import React, { useEffect } from "react";
import "./Contact.scss";
import ContactForm from "../../comps/contactcomp/ContactForm";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import Pagetop from "../../comps/pagetop/Pagetop";
function Contact() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (

    <>
     <Pagetop text="Contact"/>
    <div className="contact-parent parent">
     
      <div className="contact-container container">
        <div className="contact-left contact-body" data-aos-delay="300" data-aos="fade-up">
          {/* card 1 */}
          <div className="contact-card" >
            <div className="flag-box">
              <div className="flag-content">Dubai</div>
              <div className="flag bg-img-cover dubai"></div>
            </div>

            <div className="heading custom-heading">Dubai Office :</div>
            <a href="tel:+14086936337​" className="contact-card-box">
              <span>
                <IoCallOutline />
              </span>{" "}
              <div  className="contact-info">
                <p>+1 408 693 6337​</p>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/wUvDhkbhLCnKCk4TA" className="contact-card-box" target="__blank">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <div className="heading custom-heading2">
                  California Office :{" "}
                </div>
                <p>505 Cento Ct, Pleasanton, CA 94566​</p>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/CVWvUKyAZnHMcXpX6" className="contact-card-box" target="__blank">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <div className="heading custom-heading2">Delaware Office : </div>
                <p>3911 Concord Pike #8030,<br/> Wilmington, Delaware,19803</p>
              </div>
            </a>
          </div>

          {/* card 2 */}
          <div className="contact-card" >
          <div className="flag-box">
              <div className="flag-content">UK</div>
              <div className="flag bg-img-cover uk"></div>
            </div>
            <div className="heading custom-heading">UK Office :</div>
            <a href="tel:+1 408 693 6337" className="contact-card-box">
              <span>
                <IoCallOutline />
              </span>{" "}
              <div className="contact-info">
                <p>+1 408 693 6337​</p>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/haYyLsWvNbWU5eoE7" className="contact-card-box" target="__blank">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <p>20 Langland Drive, Pinner HA54SA​</p>
              </div>
            </a>
          </div>

          {/* card 3 */}
          <div className="contact-card" >
          <div className="flag-box">
              <div className="flag-content">India</div>
              <div className="flag bg-img-cover india"></div>
            </div>
            <div className="heading custom-heading">India Office :</div>
            <a href="tel:+91 8298290078​" className="contact-card-box">
              <span>
                <IoCallOutline />
              </span>{" "}
              <div className="contact-info">
                <p>+91 8298290078​</p>
              </div>
            </a>
            <div className="contact-card-box">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <a href="https://maps.app.goo.gl/aScSECScUZRB3GLL7" className="contact-info" target="__blank">
                <div className="heading custom-heading2">
                  Development Centre Pune :{" "}
                </div>
                <p>
                  403, 4th Floor, Kapil Zenith IT Park, <br/> Bavdhan,Pune 411021​
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right contact-body" data-aos-delay="300" data-aos="fade-up">
          <div >
            <ContactForm
              heading="We’d Love To Hear From You"
              description="Interested in partnering with a leading healthcare innovator? Join the AxonCare network."
            />
          </div>

          {/*  */}
          <div className="contact-card">
            <a href="mailto:info@axoncare.com" className="contact-card-box">
              <span>
                <MdOutlineMail />
              </span>{" "}
              <div className="contact-info">
              <div className="heading custom-heading">Email :</div>
                <p>info@axoncare.com</p>
              </div>
            </a>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
