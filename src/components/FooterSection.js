import "./FooterSectionStyle.css"

import React from 'react'

import logo from "../assets/Logos-04.png"


const FooterSection = () => {
  return (
    <div className="footer">
       <div className="footer-logo">
          <img src={logo} alt="footerpic"  />
          <div>
            <h5>Our Stores</h5>
            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.</p>
          </div>
       </div>
       <div className="footer-columns">
          <div>
              <h5>About Us</h5>
              <ul>
                <li>Our History</li>
                <li>Company Information</li>
                <li>Our Vision</li>
              </ul>
          </div>
          <div>
              <h5>Our Stores</h5>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Refunds & Returns</li>
              </ul>
          </div>
          <div>
              <h5>Customer Care</h5>
              <ul>
                <li>My Account</li>
                <li>F.A.Q</li>
                <li>Contact us</li>
              </ul>
          </div>
       </div>
       <div className="horizontal-line"></div>
    </div>
    
  )
}

export default FooterSection