import React from 'react'

const Videosec = () => {
  return (
    <>
         <div className="wrapper VideoSec" >
      <div className="container VideoSec-container">
        <div className="left">
       <div className="video">
           <video autoPlay muted loop playsInline className="videoLaptop">
              <source src={props.videoSource} type="video/webm" />
            
              Your browser does not support the video tag.
            </video>
       </div>
        </div>
        <div className="right">
         <div className="top-sec">
         <h2>
            {props.heading}
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
  )
}

export default Videosec

