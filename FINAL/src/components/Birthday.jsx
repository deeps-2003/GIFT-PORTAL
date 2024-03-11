import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import '../assets/css/birthday.css';
import logbgg from '../assets/images/pic4.jpg';

const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '300%',
  background: `url(${logbgg}) center/cover no-repeat`,
  opacity: 1,
  zIndex: -1,
};

const Birthday = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    // Fetch gifts from the backend when the component mounts
    axios.get('http://localhost:8080/api/gift')
      .then(response => {
        setGifts(response.data);
      })
      .catch(error => {
        console.error('Error fetching gifts:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='bday-main'>
        <div style={backgroundStyle}>
          <div className='birthday-card-row'>
            {gifts.map((gift, index) => (
              <Link key={index} to="/birthinfo" className='birthday-card-link'>
                <div className='birthday-card'>
                  {/* Display the gift information */}
                  <img src={gift.image} alt={gift.name} style={{ maxWidth: '100%', height: 'auto' }} />
                  <h3 className='birthday-card-title'>{gift.name}</h3>
                  <p className='birthday-card-description'>{gift.details}</p>
                  <p className='birthday-card-price'>Rs.{gift.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
