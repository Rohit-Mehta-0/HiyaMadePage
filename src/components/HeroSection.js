import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import{Link} from 'react-router-dom'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Hiya Made</h1>
      <p>Putting The HAND Back Into HANDMADE</p>
      <div className='hero-btns'>
        <Link to='/cards'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
          </Button>
        </Link>
        
      </div>
    </div>
  );
}

export default HeroSection;
