import React from 'react';
import LaptopImage from '../assets/HeroSection.png';
import '../index.css';

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="workspace-image">
        <img src={LaptopImage} alt="Workspace" />
      </div>
      
      <div className="content-section">
        <h1 className="hero-title">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button className="cta-button">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;