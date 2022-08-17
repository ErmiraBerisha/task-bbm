import "./HoverSectionStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

import img1 from "../assets/Rectangle40.png";
import img2 from "../assets/Rectangle41.png";
import img3 from "../assets/Rectangle42.png";
import img4 from "../assets/Rectangle43.png";


const data = [
    {
        id: 1,
        link:'Find out more',
        content:'This lavender body lotion is enriched with the relaxing scent of lavender essential oil and the nourishing properties of shea butter.',
        listitem1: 'Lavender is most commonly used in aromatherapy, as the fragrance is believed to help promote calmness and wellness.',
        listitem2: 'Research even suggests that lavender increases the amount of slow and deep-wave sleep!',
        listitem3: 'It’s said to help reduce stress and anxiety – just a few reasons why we love it so much.'
    }
]


const HoverSection = () => {
  return (
    
        <div className="hover-section">
            { data.map ( card => (
            <>
                <div className="hover-card">
                        <img src={img1} alt="cardpic"/>
                        <div className="hover-card-content">
                            <h3>Lavender body lotion</h3>
                            <Link to="#">{card.link}</Link>
                            <div className="paragraph">
                                <p>{card.content}</p>
                                <ul>
                                    <li>{card.listitem1} </li>
                                    <li>{card.listitem2} </li>
                                    <li>{card.listitem3}</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="hover-card">
                        <img src={img3} alt="cardpic" />
                        <div className="hover-card-content">
                            <h3>Benefits of Loti Wellness</h3>
                            <Link to="#">{card.link}</Link>
                            <div className="paragraph">
                                <p>{card.content}</p>
                                <ul>
                                    <li>{card.listitem1} </li>
                                    <li>{card.listitem2} </li>
                                    <li>{card.listitem3} </li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="hover-card">
                        <img src={img2} alt="cardpic"/>
                        <div className="hover-card-content">
                            <h3>Lavender body lotion</h3>
                            <Link to="#">{card.link}</Link>
                            <div className="paragraph">
                                <p>{card.content}</p>
                                <ul>
                                    <li>{card.listitem1} </li>
                                    <li>{card.listitem2} </li>
                                    <li>{card.listitem3} </li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="hover-card">
                        <img src={img4} alt="cardpic"/>
                        <div className="hover-card-content">
                            <h3>Lavender body lotion</h3>
                            <Link to="#">{card.link}</Link>
                            <div className="paragraph">
                                <p>{card.content}</p>
                                <ul>
                                    <li>{card.listitem1} </li>
                                    <li>{card.listitem2} </li>
                                    <li>{card.listitem3} </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </>
            ))}
        </div>
  )
}

export default HoverSection