import React from 'react';
import './ResidentialDetails.css'; // Assuming your styles are in this file, you can rename if needed.
import { Link } from 'react-router-dom';

const EmergencyElectricalDetails = () => {
  window.scrollTo(0, 0);
  return (
    <div className="service-details-container">
      <div className="service-details-header">
        <h1>Emergency Electrical Services</h1>
        <img src="/images/plumm.jpg" alt="Emergency Electrical Services" />
      </div>
      
      <div className="service-details-content">
        <h2>What We Offer</h2>
        <p>
          Our Emergency Electrical Services are available 24/7 to handle urgent electrical issues at your home or business. Whether it's a power outage, a wiring fault, or an electrical emergency that requires immediate attention, our skilled electricians are ready to provide fast and reliable solutions.
        </p>
        
        <h2>Our Emergency Services Include:</h2>
        <ul>
          <li>24/7 Availability for Emergency Repairs</li>
          <li>Quick Response Times to Minimize Downtime</li>
          <li>Power Outage Recovery</li>
          <li>Electrical Fire Risk Prevention</li>
          <li>Faulty Wiring & Circuit Repair</li>
          <li>Inspection & Emergency Safety Check-ups</li>
        </ul>

        <h2>Why Choose Us for Emergency Services?</h2>
        <p>
          At IHMS, we understand that electrical emergencies require immediate action to avoid greater risks. Our team is trained to quickly diagnose and fix any electrical issues, ensuring your safety and peace of mind at all hours of the day.
        </p>

        <blockquote>
          "Your safety is our priority. We are always ready to respond in case of an electrical emergency."
        </blockquote>

        <div className="book-now-section">
          <Link to="/book-now" className="back-button">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmergencyElectricalDetails;
