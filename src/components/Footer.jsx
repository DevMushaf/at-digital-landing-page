import React from 'react';
import '../index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36">
              <polygon points="16,14 22,8 34,26 28,32" fill="white" />
              <polygon points="8,24 20,24 14,32" fill="white" />
            </svg>
            <span className="logo-text">at digital</span>
          </div>
          <p className="footer-description">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h2 className="footer-heading">Our Technologies</h2>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Our Services</h2>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}