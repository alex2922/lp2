import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Belowhero.scss"
import Button from '../button/Button'

function BelowHero() {
    return (
        <>
            <div className='belowhero parent desktop-next'>
                <div className="belowhero-container container">

                    <div className="box box1">
                        <div className="subbox">
                            <span className=" icon icon1 bg-img-cover"></span>
                            <h4>For Patients
                            </h4>

                            <p className="box-p  className='opacity'">
                                24/7 care anytime, anywhere—from checkups to specialist appointments, world-class care is just a few clicks away.

                            </p>
                            <div className="btn-div">
                                <Button
                                    text="Book Now
"      
href="/contact"                      />
                            </div>
                        </div>
                    </div>

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
"      href="/contact"                       />
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
                                <Button text="Book Now"  href="/contact"/>
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
                                <Button text="Book Now"  href="/contact"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --------Swiper------- */}
            <div className='belowhero1 parent mobile-next'>
                <div className="belowhero-container1 container">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={false}
                        slidesPerView={1}
                        autoplay={{
                            delay: 250000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >     <SwiperSlide>
                            <div className="box ">
                              
                                    <span className=" icon icon11 bg-img-cover"></span>
                                    <h4>For Patients
                                    </h4>

                                    <p className="box-p  className='opacity'">
                                        24/7 care anytime, anywhere—from checkups to specialist appointments, world-class care is just a few clicks away.

                                    </p>
                                    <div className="btn-div">
                                        <Button
                                            text="Book Now
"         href="/contact"                    />
                                    </div>
                                
                            </div>
                        </SwiperSlide>
                        {/* ----------box2---------- */}
                        <SwiperSlide>
                            <div className="box ">
                               
                                    <span className=" icon icon22 bg-img-cover"></span>
                                    <h4>For Doctors</h4>
                                    <p className="box-p">
                                        Expand your practice, boost revenue, and make a global impact with
                                        flexible scheduling and no administrative overhead.
                                    </p>
                                    <div className="btn-div">
                                        <Button
                                            text="Book Now
"                href="/contact"             />
                                    </div>
                                </div>
                        
                        </SwiperSlide>
                        {/* ----------box3---------- */}
                        <SwiperSlide>
                            <div className="box box3">
                               
                                    <span className=" icon icon33 bg-img-cover"></span>
                                    <h4>AxonCare Clinic</h4>
                                    <p className="box-p">
                                        Your one-stop shop for comprehensive, high-tech healthcare with
                                        global access to top specialists and centralised records
                                    </p>
                                    <div className="btn-div">
                                        <Button text="Book Now" href="/contact" />
                                    </div>
                                </div>
                            
                        </SwiperSlide>
                        {/* ----------box4---------- */}
                        <SwiperSlide>
                            <div className="box box4">
                              
                                    <span className=" icon icon44 bg-img-cover"></span>
                                    <h4 className="box-heading">AxonCare Clinic</h4>
                                    <p className="box-p">
                                        Your one-stop shop for comprehensive, high-tech healthcare with
                                        global access to top specialists and centralised records
                                    </p>

                                    <div className="btn-div">
                                        <Button text="Book Now" href="/contact" />
                                    </div>
                                
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </>
    )
}

export default BelowHero