import "./SecondPageStyle.css";

import React from 'react'

const SecondPage = () => {
  return (
    <div className="second-page">
        <div className="text-box2">
            <h1>Unbox happiness, every month.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        <div className="subscribe-section">
            <div className="subscribe-cards">
                <div className="card">
                    <div className="number">
                        <h3>1</h3>
                    </div>
                    <div className="content">
                        <h5>Subscribe to Loti</h5>
                        <p>Start your wellness journey & get a a new self-care kit delivered to your home every month! Starting from <span>CAD $47.95 </span> per box</p>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="card">
                    <div className="number">
                        <h3>2</h3>
                    </div>
                    <div className="content">
                        <h5>Cultivate Happiness</h5>
                        <p>Use our skincare products & therapeutic activities to inspire happiness and improve your wellbeing, one step at a time. </p>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="card">
                    <div className="number">
                        <h3>3</h3>
                    </div>
                    <div className="content">
                        <h5>Your Journey Begins</h5>
                        <p>An inspiring, yet simple way to take care of yourself every day, hassle-free. Loti is the first step to self-empowerment, healing, and growth.</p>
                    </div>
                </div>
            </div>
            <button>Subscribe now</button>
    </div>
        
            

    </div>
  )
}

export default SecondPage