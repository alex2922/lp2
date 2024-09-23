import React from "react";
import pagetopvideo from "../../assets/background.webm";
import "./Pagetop.scss";
import ReactPlayer from "react-player";


function Pagetop(props) {
  return (
    <div className="parent pagetop">
      <ReactPlayer
                config={{
                  file: {
                    forceVideo: true,
                    attributes: {
                      poster: props.thumbnail ,
                      preload: "metadata",
                    },
                  },
                }}
                autoPlay
                loop
                muted
                playsinline
                playing={true}
                url={pagetopvideo}
                width="100vw"
              height="auto"
              
              />
      <div className="overlay"></div>
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
