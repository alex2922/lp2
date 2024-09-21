
// Instruction for using the props

// href="paste your link "
// text=" button text"
// blank= {ture}     --- if want to redirect to new page
// onClick={() => alert("Button clicked!")}

// do not use href blank with onclick and vice versa

import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

function Button(props) {

    let word = ' ' + props.text + ' ';

    const navigate = useNavigate();
    const wordArray = Array.from(word);

    const blank = props.blank;


    const handleClick = () => {
        if (props.href) {
          if (props.blank) {
            window.open(props.href, "_blank", "noopener,noreferrer");
          } else {
            navigate(props.href);
          }
        } else if (props.onClick) {
          props.onClick();
        }
      };

    return (
        <button onClick={handleClick}    target={blank ? "_blank" : undefined} rel="noreferrer" className="btn">
            <div className="original">{word}</div>
            <div className="letters">
                {wordArray.map((letter, index) => (
                    <span key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </div>
        </button>
    );
}

export default Button;
