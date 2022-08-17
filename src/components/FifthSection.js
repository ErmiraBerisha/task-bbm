import "./FifthSection.css"

import React from 'react'
import picture from "../assets/girl-on-laptop.png"

const FifthSection = () => {
  return (
    <div className="fifth-section">
        <img src={picture} alt="lotipic"/>
        <div className="get-your-box">
            <h1>Get Your Loti Box Today!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <button>Get Your Loti Box Today!</button>
        </div>
    </div>
  )
}

export default FifthSection