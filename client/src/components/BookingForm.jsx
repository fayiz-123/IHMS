import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Added state to track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set the submission state to true
    // You can add form validation and further submission logic here (e.g., API call)
  };

  return (
    <div id="book">
      <div className="booking-form-container">
        <h2>Register for Service</h2>

        {isSubmitted ? (
          <div id="success-message">
            <h3>Booked Successfully!</h3>
            <p>Thank you for your registration. We will contact you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Service Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                <option value="electricity">Electricity</option>
                <option value="plumbing">Plumbing</option>
                <option value="waste">Waste Management</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
