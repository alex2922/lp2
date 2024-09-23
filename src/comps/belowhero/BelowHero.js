import React from 'react'
import "./Belowhero.scss"
import Button from '../button/Button'

function BelowHero() {
    return (
        <div className='belowhero parent'>
            <div className="belowhero-container container">

                <div className="box box2">
                    <div className="subbox">
                        <span className=" icon icon1 bg-img-cover"></span>
                        <h4>For Patients
                        </h4>
                        {/* <p className="box-p className='opacity'">
                            24/7 care anytime, anywhere—from checkups to specialist appointments, world-class care is just a few clicks away.

                        </p> */}
                        <p className="box-p  className='opacity'">
                            24/7 care anytime, anywhere—from checkups to specialist appointments, world-class care is just a few clicks away.

                        </p>
                        <div className="btn-div">
                            <Button
                                text="Book Now
"                            />
                        </div>
                    </div>
                </div>
                {/* <div className="box box1">
                    <div className="subbox">
                        <span className=" icon icon1 bg-img-cover"></span>
                        <div className="icon">

                        </div>
                        <h3>lorem</h3>
                        <p className='opacity'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, odio.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, odio.</p>
                        <div className="btn-container">
                            <Button />
                        </div>

                    </div>
                </div> */}
                {/* ----------box2---------- */}
                <div className="box box2">
                    <div className="subbox">
                        <span className=" icon icon2 bg-img-cover"></span>
                        <h4>For Doctors</h4>
                        <p className="box-p">
                            Expand your practice, boost revenue, and make a global impact with
                            flexible scheduling and no administrative overhead.
                        </p>
                        <div className="btn-div">
                            <Button
                                text="Book Now
"                            />
                        </div>
                    </div>
                </div>
                {/* ----------box3---------- */}
                <div className="box box3">
                    <div className="subbox">
                        <span className=" icon icon3 bg-img-cover"></span>
                        <h4>AxonCare Clinic</h4>
                        <p className="box-p">
                            Your one-stop shop for comprehensive, high-tech healthcare with
                            global access to top specialists and centralised records
                        </p>
                        <div className="btn-div">
                            <Button text="Book Now" />
                        </div>
                    </div>
                </div>
                {/* ----------box4---------- */}
                <div className="box box4">
                    <div className="subbox">
                        <span className=" icon icon4 bg-img-cover"></span>
                        <h4 className="box-heading">AxonCare Clinic</h4>
                        <p className="box-p">
                            Your one-stop shop for comprehensive, high-tech healthcare with
                            global access to top specialists and centralised records
                        </p>

                        <div className="btn-div">
                            <Button text="Book Now" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BelowHero