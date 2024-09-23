import React, { useState, useEffect, useRef } from "react";
import "./popup.scss";
import ContactForm from "../contactcomp/ContactForm";
import { RxCross1 } from "react-icons/rx";
import Button from "../button/Button";
import { gsap } from "gsap";

const PopUp = ({ close }) => {
  const [toggle, setToggle] = useState(true);
  const screen1Ref = useRef(null);
  const screen2Ref = useRef(null);

  useEffect(() => {
    if (toggle) {
      gsap.fromTo(
        screen1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    } else {
      gsap.fromTo(
        screen2Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [toggle]);

  return (
    <div className="popup-parent">
      <div className="popup-container">
        <div className="exit-button" onClick={close}>
          <RxCross1 />
        </div>
        {toggle ? (
          <div ref={screen1Ref} className="pop-up-screen1">
            <div className="image-box bg-img-cover"></div>
            <div className="popup-content">
              <h2 className="popup-header">Enroll before you scroll!</h2>
              <p>Join AxonCare and take control of your health.</p>
              <Button text="Get Started" onClick={() => setToggle(false)} />
            </div>
          </div>
        ) : (
          <div ref={screen2Ref} className="pop-up-screen2">
            <p className="second-screen-heading">
              Fill the form and we will bring the best of healthcare to you
              at the earliest.
            </p>
            <ContactForm reusing={true} close={close}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;
