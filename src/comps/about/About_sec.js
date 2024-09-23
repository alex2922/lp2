import React from "react";
import "./about.scss";
import Button from "../button/Button";

const About_sec = (props) => {
  return (
    <>
      <div className="aboutsec-parent parent">
        <div className="aboutsec-container container">
          <div className="about-left">
            <div className="mob-img bg-img-cover"></div>
          </div>
          <div className="about-right">
            <h2 className="heading">
              About <span>Axoncare</span>
            </h2>
            <p className="desc">
              AxonCare, a service brand by Axonic, is a global healthcare
              network that connects doctors and patients worldwide through
              cutting-edge technology solutions. By integrating the healthcare
              system, we are revolutionising healthcare delivery so that you can
              access care when and where you need it, without delay. Our network
              of specialists, along with our Axonic technological solution
              “Anytime Health” and mobile app “AxonCare,” enables you to
              overcome barriers of language and geography, receiving care in the
              way that suits you best.
            </p>
            <Button text={props.btn_text} href={props.link} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_sec;
