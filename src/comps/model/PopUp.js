import React from "react";
import "./popup.scss";
import ContactForm from "../contactcomp/ContactForm";
import { RxCross1 } from "react-icons/rx";
const PopUp = ({close}) => {
  return (
    <div className="popup-parent">
      <div className="popup-container">
        <div className="exit-button" onClick={close}>
          <RxCross1 />
        </div>
        <div className="image-box"></div>
        <div className="popup-content">
          <h2 className="popup-header">Enroll before you scroll !</h2>
          <p>Join AxonCare and take control of your health.</p>
        </div>
        <ContactForm reusing={true} />
      </div>
    </div>
  );
};

export default PopUp;
