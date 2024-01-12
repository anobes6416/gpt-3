import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className='the-best-ad'>
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>in here we will help you to shape and build your ideal body and live up your life to fullset</span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+100 </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+200 </span>
            <span>members joined</span>
          </div>
          <div>
            <span>+300 </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={Heart} className='' />
          <span>Heart Rate </span>
          <span>117 bpm</span>
        </div>
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220cal</span>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Hero