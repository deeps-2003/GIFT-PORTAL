import { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar from './navbar';
import logbgg from '../assets/images/pic4.jpg';
import '../assets/css/abirthday.css';
import ASidebar from './ASidebar';

const backgroundStyle = {
  position: 'absolute',
  top: 0,
  marginTop: '0px',
  paddingTop: '30px',
  paddingLeft: '30px',
  left: 0,
  width: '100%',
  height: '300%',
  background: `url(${logbgg}) center/cover no-repeat`,
  opacity: 1,
  zIndex: -1,
};

const ABirthday = () => {
  const [gifts, setGifts] = useState([]);
  const [editingGift, setEditingGift] = useState({ giftid: null, name: '', image: '', price: 0 });
  const [newGift, setNewGift] = useState({ name: '', image: '', price: 0 });

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

  const handleAddGift = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/gift/addgift', newGift);
      setNewGift({ name: '', image: '', price: 0 });
      setGifts([...gifts, response.data]);
    } catch (error) {
      console.error('Error adding gift:', error);
    }
  };

  const handleDeleteGift = async (giftId) => {
    try {
      await axios.delete(`http://localhost:8080/api/gift/delete/${giftId}`);
      setGifts(gifts.filter(gift => gift.giftid !== giftId));
    } catch (error) {
      console.error('Error deleting gift:', error);
    }
  };

  const handleEditGift = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/gift/update/${editingGift.giftid}`, editingGift);
      setEditingGift({ giftid: null, name: '', image: '', price: 0 });
      setGifts(gifts.map(gift => (gift.giftid === editingGift.giftid ? response.data : gift)));
    } catch (error) {
      console.error('Error editing gift:', error);
    }
  };

  return (
    <div>
      <ASidebar/>
      <div className='bday-main'>
        <div style={backgroundStyle}>
          <div className='birthday-card-row'>
            {gifts.map((gift) => (
              <div key={gift.giftid} className='birthday-card'>
                {editingGift.giftid === gift.giftid ? (
                  <div>
                    <input
                      type='text'
                      value={editingGift.name}
                      onChange={(e) => setEditingGift({ ...editingGift, name: e.target.value })}
                  
                    />
                    <br></br>
                    <input
                      value={editingGift.image}
                      type='text'
                      onChange={(e) => setEditingGift({ ...editingGift, image: e.target.value })}
                    />
                    <br></br>
                    <input
                      type='number'
                      value={editingGift.price}
                      onChange={(e) => setEditingGift({ ...editingGift, price: e.target.value })}
                    />
                    <button onClick={() => setEditingGift({ giftid: null, name: '', image: '', price: 0 })}>Cancel</button>
                    <button onClick={handleEditGift}>Save</button>
                  </div>
                ) : (
                  <div>
                    {/* Display the image here if needed */}
                    <img src={gift.image} alt={gift.name} style={{ maxWidth: '100%', height: 'auto' }} />
                    <h3 className='birthday-card-title'>{gift.name}</h3>
                    <button onClick={() => setEditingGift({ giftid: gift.giftid, name: gift.name, image: gift.image, price: gift.price })}>Edit</button>
                    <p className='birthday-card-price'>Rs.{gift.price.toFixed(2)}</p>
                    <button onClick={() => handleDeleteGift(gift.giftid)}>Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Form for adding a new gift */}
          <div className='admin-add'>
            <p style={{fontSize:'30px'}}>Add Gift</p>
            <input
              type='text'
              placeholder='Name'
              value={newGift.name}
              onChange={(e) => setNewGift({ ...newGift, name: e.target.value })}
            
            />
            <br></br>
            <input
              placeholder='Image'
              type='text'
              value={newGift.image}
              onChange={(e) => setNewGift({ ...newGift, image: e.target.value })}
            />
            <br></br>
            <input
              type='number'
              placeholder='Price'
              value={newGift.price}
              onChange={(e) => setNewGift({ ...newGift, price: e.target.value })}
            />
            <br></br>
            <button onClick={handleAddGift}>Add Gift</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABirthday;
