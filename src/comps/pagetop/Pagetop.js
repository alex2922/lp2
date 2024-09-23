import React from "react";
import pagetopvideo from "../../assets/background.webm";
import "./Pagetop.scss";

function Pagetop(props) {
  return (
    <div className="parent pagetop">
      <video autoPlay loop muted playsInline>
        {" "}
        <source src={pagetopvideo} type="video/mp4" />
      </video>
      <div className="container pagetop-container">
        <div className="rotor-box">
          <div className="rotor">
            <h3>{props.text}</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagetop;
