import React from 'react';
import "../../comps/partners/Partners.scss";

const cardData = [
  { title: 'Labs and Pharmacies', imageUrl: '/path-to-lab-image.jpg' },
  { title: 'Elderly Care Facilities', imageUrl: '/path-to-elderly-care-image.jpg' },
  { title: 'Corporate Enterprises', imageUrl: '/path-to-corporate-image.jpg' },
  { title: 'Residential Societies', imageUrl: '/path-to-residential-image.jpg' },
  { title: 'School Health', imageUrl: '/path-to-school-image.jpg' }
];

function Partners() {
  return (
    <>
    <div className="fiveCard-content parent">
      <div className="fiveCard-container container" id="five-card">
        <h2>
          AxonCare Partners:
          <span>Connecting Health Through Human-Touch Technology</span>
        </h2>

        <p>
          Become a partner in revolutionizing healthcare delivery with our
          tech-powered service, connecting you to the AxonCare network. Our
          cutting-edge "Anytime Health" kiosk, equipped with point-of-care
          testing devices, is at the heart of this network, linking healthcare
          professionals (doctors, labs, pharmacies) with beneficiaries
          (patients, corporates, elderly care facilities, schools, and
          residential societies). We are bridging the healthcare gap through
          human-touch technology, connecting every part of healthcare.
        </p>

        {/* <Button text=" Join the AxonCare Network " /> */}
      </div>
    </div>
    <div className="fivecard-parent parent">
      <div className="fivecard-container container">
        <div className="left">
          <div className="u-box newbox1 bg-img-cover">
            <div className="overlay"></div>
            <div className="text-heading">Labs and Pharmacies</div>
            <div className="hover-box">
              <div className="desc">
                Become part of our network as Lab and Pharmacy partners—key
                pillars in the healthcare journey. While patients visit labs
                for tests or pharmacies for medication, AxonCare brings doctor
                consultations directly to your facility, offering patients
                instant insights and cost-effective health solutions.
              </div>

              <div className="newbtn">
                {/* <Button
                  text="Know More"
                  href="https://axonichealth.com/axoncare/"
                  blank={true}
                /> */}
              </div>
            </div>
          </div>
          <div className="d-box newbox2 bg-img-cover">
            <div className="overlay"></div>
            <div className="text-heading">Corporate Enterprises</div>
            <div className="hover-box">
              <div className="desc">
                Ensure the health and productivity of your employees with
                AxonCare. We provide an Anytime Health kiosk at your
                workplace, offering 24/7 specialist consultations, daily
                health monitoring through point-of-care testing, and mental
                health support—reducing absenteeism and empowering your
                workforce.
              </div>
              <div className="newbtn">
                {/* <Button
                  text="Know More"
                  href="https://axonichealth.com/corporate-wellness/"
                  blank={true}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="center bg-img-cover">
          <div className="overlay"></div>
          <div className="text-heading">Residential Societies</div>
          <div className="hover-box">
            <div className="desc">
              AxonCare brings world-class healthcare to your doorstep. Avoid
              long trips to specialist clinics by setting up an AxonCare
              clinic within your society, providing easy access to specialists
              and offering consultations, prescriptions, and more—all through
              the AxonCare app.
            </div>
            <div className="newbtn">
              {/* <Button text="Know More" href="/contact" /> */}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="ru-box newbox3 bg-img-cover">
            <div className="overlay"></div>
            <div className="text-heading">Elderly Care Facilities </div>
            <div className="hover-box">
              <div className="desc">
                Reduce frequent hospital visits for elderly residents by
                setting up an AxonCare clinic within your facility. Offer
                daily health monitoring (glucose levels, ECGs), instant access
                to specialists, and real-time health insights for family
                members—delivering convenient, continuous care.
              </div>
              <div className="newbtn">
                {/* <Button
                  text="Know More"
                  href="https://axonichealth.com/elderly/"
                  blank={true}
                /> */}
              </div>
            </div>
          </div>
          <div className="rd-box newbox4 bg-img-cover">
            <div className="overlay"></div>
            <div className="text-heading">School Health</div>
            <div className="hover-box">
              <div className="desc">
                Monitor the health of your students from a young age with an
                AxonCare clinic on your school premises. Early detection of
                potential health issues ensures better physical and mental
                development, giving both students and parents peace of mind
                with real-time health insights.
              </div>
              <div className="newbtn">
                {/* <Button
                  text="Know More"
                  href="https://axonichealth.com/school-health-programs/"
                  blank={true}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Partners;
