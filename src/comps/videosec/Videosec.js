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
   <div className="section-indication container"  >
   <span className="section-indicator">{props.heading}</span>
   </div>

        <div className="container VideoSec-container"  data-aos="fade-up" >
          <div className="left"  >
          <div className="video">
  <ReactPlayer
    config={{
      file: {
        forceVideo: true,
        attributes: {
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
className="videoPlayer"
style={{borderRadius:"20px"}}
  />
</div>

          </div>
          <div className="right" >
            <div className="top-sec">
              <h2 className="heading ">
                <span>{props.highlight}</span>
              </h2>
              <p>{props.desc}</p>
            </div>
            <div className="bottom-cta">
              <Button text={props.btn_text} href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSec;
