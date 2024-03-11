
// import ANavbar from './Anavbar';
import ASidebar from './ASidebar';
import '../assets/css/aaniversary.css';
import logbgg from '../assets/images/pic4.jpg';
import lamp from '../assets/images/lamp.jpg';
import spotify from '../assets/images/spotify.jpg';
import greeting from '../assets/images/greeting.jpg';
import keychain from '../assets/images/keychain.jpg';
import frame from '../assets/images/frame.jpg';

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

const AAnniversary = () => {
  const anniversaryCardsData = [
    {
      imageUrl: lamp,
      title: 'Personalised Glowing Tower Lamp',
      description: 'Rs.1699.00',
    },
    {
      imageUrl: spotify,
      title: 'Personalised Spotify Poster Frame',
      description: 'Rs.799.00',
    },
    {
      imageUrl: greeting,
      title: 'Personalised Wishes Birthday Card',
      description: 'Rs.259.00',
    },
    {
      imageUrl: keychain,
      title: 'Personalised Spotify Keychain Acrylic',
      description: 'Rs.349.00',
    },
    {
      imageUrl: frame,
      title: 'Digital Art Personalised Painting',
      description: 'Rs.799.00',
    },
  ];

  return (
    <div>
      
      <ASidebar />
      <div className='bday-main'>
        <div style={backgroundStyle}>
          <div className='birthday-card-row'>
            {anniversaryCardsData.map((card, index) => (
              <div key={index} className='birthday-card'>
                <img src={card.imageUrl} alt={card.title} className='birthday-card-image' />
                <h3 className='birthday-card-title'>{card.title}</h3>
                <p className='birthday-card-description'>{card.description}</p>
                <button
                  style={{ fontSize: '20px', backgroundColor: 'crimson', color: 'white', width: '200px', marginLeft: '30px' }}
                >
                  Add Gift
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AAnniversary;
