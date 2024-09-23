import React from "react";
import "./Flipcard.scss";
import Button from "../button/Button";

function Flipcard(props) {
  return (
    <div className="flipcard">
      <div className="front bg-img-cover" style={{ background: `url(${props.img})` }}>
        <h3>{props.heading}</h3>
      </div>
      <div className="back bg-img-cover " style={{ background: `url(${props.img})` }}>
        <p>{props.desc}</p>

        <div className="button">
          <Button text={props.btn_text}  href={props.btn_link} />
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
