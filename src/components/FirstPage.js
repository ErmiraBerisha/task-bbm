import "./FirstPageStyle.css";

import React from 'react'
import Marquee from "react-fast-marquee";
 
import smallLogos from "../assets/small-logos.png"

const FirstPage = () => {
  return (
    <>
        <main>
            <div className="text-box">
                <h1>
                    Unbox happiness, every month.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <button>
                    Subscribe now
                </button>

            </div>
            <div className="left-section">
                <div className="half-circle">
                </div>
            </div>
            <div className="middle-section"></div>
            <div className="right-section"></div> 
        </main>
        
        <div className="firstpage-footer">
            <p>Featured on</p>
            <div className="marquee-slider">
                <Marquee speed={40}>
                    <img src={smallLogos} alt="Logo" />
                </Marquee>
                <hr />
            </div>

        </div>
    </>
  )
}

export default FirstPage