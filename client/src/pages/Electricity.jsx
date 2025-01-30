import React from "react";
import "./Electricity.css"; // Assume your shared CSS is included here
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from 'react-router-dom';

const Electricity = () => {
  window.scrollTo(0, 0);

  const electricityServices = [
    {
      id: "E001", type:"residential",
      title: "Residential Electrical Services",
      description: "Comprehensive electrical repair & installation for home.",
      price: "₹1500",
      image: "/images/plumm.jpg",
    },
    {
      id: "E002",type:"commercial",
      title: "Commercial Electrical Services",
      description: "Expert solutions for your business's electrical needs.",
      price: "₹2500",
      image: "/images/plumm.jpg",
    },
    {
      id: "E003",type:"emergency",
      title: "Emergency Electrical Services",
      description: "24/7 emergency services to fix urgent electrical issues.",
      price: "₹3500",
      image: "/images/plumm.jpg",
    },
  ];

  return (
    <>
      <Nav />
      <div id="elec">
        <div id="home" className="electricity-services pattern-section">
          <div className="hero-section">
            <div className="hero-content">
              <h1>Our Electricity Services</h1>
              <p className="subheading">
                At IHMS, we offer a wide range of professional electrical services designed to meet the needs of both residential and commercial properties. Whether you’re looking for reliable home electrical solutions, efficient systems for your business, or urgent emergency electrical services, our experienced team is here to ensure your electrical needs are met with expertise and care.
              </p>
            </div>
          </div>
          
          <div className="services-container section-flex">
            {electricityServices.map((service) => (
              <div key={service.id} className="color-card red">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p>
                    <strong>Price:</strong> {service.price}
                  </p>
                 <Link to={`/electricity/${service.type}/${service.id}`}> <button className="animated-button">
                    <span className="text">Learn More</span>
                    <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </button></Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Electricity;