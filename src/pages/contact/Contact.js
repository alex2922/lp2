import React from "react";
import "./Contact.scss";
import ContactForm from "../../comps/contactcomp/ContactForm";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="contact-parent parent">
      <div className="contact-container container">
        <div className="contact-left contact-body">
          {/* card 1 */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
            <div className="heading custom-heading">Dubai Office :</div>
            <div className="contact-card-box">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <div className="heading custom-heading">Delaware Office : </div>
                <p>3911 Concord Pike #8030, Wilmington, Delaware,19803</p>
              </div>
            </div>
            <div className="contact-card-box">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <div className="heading custom-heading">
                  California Office :{" "}
                </div>
                <p>505 Cento Ct, Pleasanton, CA 94566​</p>
              </div>
            </div>
            <div className="contact-card-box">
              <span>
                <IoCallOutline />
              </span>{" "}
              <div className="contact-info">
                <p>Phone no. : +1 408 693 6337​</p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
            <div className="heading custom-heading">UK Office :</div>
            <div className="contact-card-box">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <p>20 Langland Drive, Pinner HA54SA​</p>
              </div>
            </div>
            <div className="contact-card-box">
              <span>
                <IoCallOutline />
              </span>{" "}
              <div className="contact-info">
                <p>Phone no. : +1 408 693 6337​</p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="500">
            <div className="heading custom-heading">India Office :</div>
            <div className="contact-card-box">
              <span>
                <IoLocationOutline />
              </span>{" "}
              <div className="contact-info">
                <div className="heading custom-heading">
                  Development Centre Pune :{" "}
                </div>
                <p>
                  403, 4th Floor, Kapil Zenith IT Park, Bavdhan,Pune 411021​
                </p>
              </div>
            </div>
            <div className="contact-card-box">
              <span>
                <IoCallOutline />
              </span>{" "}
              <div className="contact-info">
                <p>Phone no : +91 8298290078​</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right contact-body">
          <div data-aos-delay="300"
          data-aos="fade-up">
          <ContactForm
            heading="We’d Love To Hear From You"
            description="Interested in partnering with a leading healthcare innovator? Join the AxonCare network."
          />
          </div>
       
          {/*  */}
          <div className="contact-card" data-aos-delay="400"
          data-aos="fade-up">
            <div className="contact-card-box">
              <span>
              <MdOutlineMail />
              </span>{" "}
              <div className="contact-info">
                <p>
                info@axoncare.com
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
