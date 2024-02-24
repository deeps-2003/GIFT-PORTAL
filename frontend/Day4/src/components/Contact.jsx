
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/contact.css';
import bgimg2 from '../assets/images/pic4.jpg'
import Navbar from './navbar';
import Sidebar from './Sidebar';


const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '150%',
  background: `url(${bgimg2}) center/cover no-repeat`,
  opacity: 1,
  zIndex: -1, 
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (e.g., sending data to server)
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div style={backgroundStyle}></div> {/* Background without content */}
      <div className="contact-page">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br></br>
          <Link to="/home">
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;