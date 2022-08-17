import React from 'react'

import Navbar from "./components/Navbar";
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import HoverSection from './components/HoverSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SliderSection from './components/SliderSection';
import NewsletterSection from './components/NewsletterSection';
import FooterSection from './components/FooterSection';



const Home = () => {
  return (
    <div>
        <Navbar/>
        <FirstPage/>
        <SecondPage/>
        <HoverSection/>
        <FourthSection/>
        <FifthSection/>
        <SliderSection/>
        <NewsletterSection/>
        <FooterSection/>
    </div>
  )
}

export default Home