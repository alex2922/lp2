import React from "react";
import "./videosec.scss";
import Button from "../button/Button";
import ReactPlayer from "react-player";

const VideoSec = (props) => {
  return (
    <>
      <div className="wrapper VideoSec">
        <div className="container VideoSec-container">
          <div className="left">
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
        className="videoLaptop"
      />
            </div>
          </div>
          <div className="right">
            <div className="top-sec">
              <h1 className="heading">
                {props.heading}
                <span>{props.highlight}</span>
              </h1>
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
