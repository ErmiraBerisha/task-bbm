import "./FourthSectionStyle.css"


import React from 'react'

import img1 from "../assets/image 2.png"
import img2 from "../assets/image 4.png"
import img3 from "../assets/image5.png"



const FourthSection = () => {
  return (
    <div className="fourth-section">
        <div className="fourth-section-title">
            <h1>Benefits of Loti Wellness</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        

        <div className="image-wrapper">

            <div className="box">
                <img src={img1} alt="wrapperpic"/>
                <div className="text-wrapper">
                    <h2>Boxes come monthly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
            <div className="box">
                <img src={img3} alt="wrapperpic" />
                <div className="text-wrapper">
                    <h2>Boxes come monthly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
            <div className="box">
                <img src={img2} alt="wrapperpic"/>
                <div className="text-wrapper">
                    <h2>Boxes come monthly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default FourthSection