import "./NavbarStyle.css"

import React, {useState} from 'react';
import { Link } from "react-router-dom"
import logo from "../assets/Logos-04.png" 
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[color, setColor] = useState(false);
    const changeColor = () =>{
        if (window.scrollY >=100) {
            setColor(true);
            
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);


  return (
    <header className={color ? "header header-bg" :
    "header"}>
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
        <ul className={click ? "nav-menu active" : 
            "nav-menu"}>
            <li>
                <Link to="/pastboxes">Past boxes</Link>
            </li>
            <li>
                <button>Login</button>
            </li>
            <li>
                <button className="blue-btn">Get Started</button>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                 <FaTimes  size={20}/>
            ) : (
                <FaBars  size={20}/>
            )}
           
         

        </div>
    </header>
  )
}

export default Navbar