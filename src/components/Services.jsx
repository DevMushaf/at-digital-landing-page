import React from 'react';
import webMobileImage from '../assets/web-mobile.png';
import digitalStrategyImage from '../assets/digital-strategy.png';
import '../index.css';

const Services = () => {
  const services = [
    {
      id: 'web-mobile',
      image: webMobileImage,
      title: 'Web & Mobile App Development',
      description: 'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.',
      alt: 'Web and Mobile App Development'
    },
    {
      id: 'digital-strategy',
      image: digitalStrategyImage,
      title: 'Digital Strategy Consulting',
      description: 'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.',
      alt: 'Digital Strategy Consulting'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-item ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="service-image">
              <img 
                src={service.image} 
                alt={service.alt}
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="learn-more-btn">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;