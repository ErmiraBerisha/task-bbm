import "./SliderSectionStyle.css"

import React from 'react'

import { IoIosStar } from "react-icons/io";

import picture from "../assets/Rectangle 50.png"

import picture2 from "../assets/Rectangle 39.png"

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/modules/navigation/navigation.min.css'

import 'swiper/swiper.min.css'

import { Navigation } from "swiper";

const data = [
    {
        id: 2,
        title: 'Jane Cooper',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimam,ncididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    }
]
   


const SliderSection = () => {
  return (
    
    <div className="slider-section">
        <div className="slider-title">
            <h2>Hear what our customers have to say</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        {/* Slider cards*/}
        <div className="slider" >
        <Swiper 
            breakpoints={{
                480: {
                  width: 480,
                  slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                1728: {
                    width: 1728,
                    slidesPerView: 2,
                  },
            }}
            slidesPerView={2}
            spaceBetween={0}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            >
            { data.map( user => (
            <div>
                <SwiperSlide className="slide">
                    <div className="slide-content">
                        <div className="image">
                            <img src={picture2} alt="slidepic"/>
                        </div>
                        <div className="card-text">
                            <h5>{user.title}</h5>
                            <div className="icons">
                                <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                            </div>
                            <p>{user.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="slide-content2">
                                <div className="image">
                                    <img src={picture} alt="slidepic" />
                                </div>
                                <div className="card-text">
                                    <h5>{user.title}</h5>
                                    <div className="icons">
                                        <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                        <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                        <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                        <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                        <IoIosStar size={24} style={{color:"#72D8B3"}}/>
                                    </div>
                                    <div className="icons">{user.icon}</div>
                                    <p>{user.text}</p>
                                </div>
                            </div>
                </SwiperSlide>
            </div>
            ))}
        </Swiper>

        </div>

    </div>

)
}


export default SliderSection
