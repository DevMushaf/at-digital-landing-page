import React, { useState } from 'react';
import '../index.css';

const navLinks = [
  { label: 'HOME', href: '#' },
  { label: 'SERVICES', href: '#' },
  { label: 'ABOUT US', href: '#' },
  { label: 'CONTACT US', href: '#' },
  { label: 'CAREERS', href: '#' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36">
            <polygon points="16,14 22,8 34,26 28,32" fill="white"/>
            <polygon points="8,24 20,24 14,32" fill="white"/>
          </svg>
          <span className="logo-text">at digital</span>
        </div>

        {/* Desktop/Tablet Menu */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a className="nav-link" key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        {/* Hamburger Icon For Mobile */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="mobile-menu-nav">
            {navLinks.map((link) => (
              <a
                className="mobile-menu-link"
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
