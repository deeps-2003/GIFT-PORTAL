import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from "../assets/images/mug.jpg";
import '../assets/css/birthdayinfo1.css'

// ... (existing imports)

const QuantityForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [giftWrapText, setGiftWrapText] = useState('');
  const [giftMessageText, setGiftMessageText] = useState('');
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [giftName, setGiftName] = useState(''); // New field for Gift Name

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyNow = () => {
    const data = {
      quantity,
      giftName, 
      giftWrap: giftWrapText,
      giftMessage: giftMessageText,
      receiver,
      sender,
      message,
    
    };

    axios.post('http://localhost:8080/api/info/add', data)
      .then(response => {
        console.log('Details posted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error posting details:', error);
      });
  };

  return (
    <div className="image-container">
      <div className='im'>
        <img src={image} alt="Mug Image" style={{ width: '100%', padding: '10%', marginLeft: '50px' }} />
        <p style={{ marginLeft: '175px', fontSize: '20px' }}>Happy Birthday Cupcake Mug</p>
      </div>

      <div className="quantity-form-container">
        <div className="quantity-input-container"> 
          <label htmlFor="quantity">Quantity</label>
          <button className="quantity-button1" onClick={handleDecrease}>-</button>
          <input
            className="quantity-input"
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            required
          />
          <button className="quantity-button2" onClick={handleIncrease}>+</button>
        </div>

        <div className="message-fields">
        <label htmlFor="giftName">Gift Name:</label>
          <input
            type="text"
            id="giftName"
            value={giftName}
            onChange={(e) => setGiftName(e.target.value)}
            required
          />

          <label htmlFor="receiver">Receiver:</label>
          <input
            type="text"
            id="receiver"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            required
          />

          <label htmlFor="sender">Sender:</label>
          <input
            type="text"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />

          <label htmlFor="message">Message for Customization:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <label htmlFor="giftWrapText">Gift Wrap(Yes/No):</label>
          <input
            type="text"
            id="giftWrapText"
            value={giftWrapText}
            onChange={(e) => setGiftWrapText(e.target.value)}
            required
          />

          <label htmlFor="giftMessageText">Gift Message(Yes/No):</label>
          <input
            type="text"
            id="giftMessageText"
            value={giftMessageText}
            onChange={(e) => setGiftMessageText(e.target.value)}
            required
          />

     
          
        </div>

        <div>
          <button className="buy-now-button" onClick={handleBuyNow}>
            <Link to="/pay">BUY NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityForm;
