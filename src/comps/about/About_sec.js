import React, { useEffect } from "react";
import "./about.scss";
import Button from "../button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const About_sec = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>


      <div className="aboutsec parent">
        <div className=" aboutsec-container container">
          <div className="left">
            <div
              className="mob-img bg-img-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>
          <div className="right">

            <h2 className="heading" data-aos="fade-up" data-aos-delay="200" id="example-anchor">
              About <span>Axoncare</span>
            </h2>
            <p className="desc" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="#example-anchor">
              AxonCare, a service brand by Axonic, is a global healthcare
              network that connects doctors and patients worldwide through
              cutting-edge technology solutions. By integrating the healthcare
              system, we are revolutionising healthcare delivery so that you
              can access care when and where you need it, without delay. Our
              network of specialists, along with our Axonic technological
              solution “Anytime Health” and mobile app “AxonCare,” enables you
              to overcome barriers of language and geography, receiving care
              in the way that suits you best.
            </p>
            <div
              className="buton-a"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="#example-anchor"
            >
              <Button text="Know More" href="/about" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About_sec;
