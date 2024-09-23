import React from "react";
import Videosec from "../../comps/videosec/Videosec";
import doctorVideo from "../../assets/videos/doctor_video.webm"
import Partners from "../../comps/partners/Partners";
import FourCard from "../../comps/fourCard/FourCard";
function Home() {
  return (
    <div>
      
      <Videosec
        heading="For Patients "
        highlight=" 24/7 Care Anytime, Anywhere"
        desc="We bring healthcare to you—from daily health checkups to specialist appointments, you receive world-class care with just a few clicks. Our multispecialty smart clinic connects you to a specialist in minutes, allowing you to book appointments and store medical records in the AxonCare app. Our “Anytime Health” kiosk provides over 130 rapid test results, offering real-time health insights for both you and your doctor. This integrated service ensures a comprehensive view of your health for seamless, accurate care."
        btn_text="Book Appointment"

        videoSource={doctorVideo}
      />
<FourCard/>
      <Partners/>
    </div>

    
  );
}

export default Home;
