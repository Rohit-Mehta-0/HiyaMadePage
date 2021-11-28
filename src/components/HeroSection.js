import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import{Link} from 'react-router-dom'
function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>HIYA MADE</h1>
      <p>Do What You Love</p>
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
