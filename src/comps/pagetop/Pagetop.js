import React from "react";

import "./Pagetop.scss";

function Pagetop(props) {
  return (
    <div className="parent pagetop">
      <div className="container pagetop container">
        <div className="rotor-box">
          <div className="rotor">
            <div className="text-box">
              <h3>{props.text}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagetop;
