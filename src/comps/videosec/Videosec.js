import React, { useEffect } from "react";
import "./videosec.scss";
import Button from "../button/Button";
import ReactPlayer from "react-player";
import Aos from "aos";
import "aos/dist/aos.css";
const VideoSec = (props) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="parent VideoSec">
        <div className="container VideoSec-container">
          <div className="left" data-aos="fade-up" >
            <div className="video">
              <ReactPlayer
                config={{
                  file: {
                    forceVideo: true,
                    attributes: {
                      //   poster: {props.videoSource},
                      preload: "metadata",
                    },
                  },
                }}
                autoPlay
                loop
                muted
                playsinline
                playing={true}
                url={props.videoSource}
                width="100%"
                height="100%"
                className="videoLaptop"
              />
            </div>
          </div>
          <div className="right" data-aos="fade-down" >
            <div className="top-sec">
              <span className="section-indicator">{props.heading}</span>
              <h2 className="heading ">
                <span>{props.highlight}</span>
              </h2>
              <p>{props.desc}</p>
            </div>
            <div className="bottom-cta">
              <Button text={props.btn_text} href={props.link} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSec;
