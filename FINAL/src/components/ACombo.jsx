
import logbgg from '../assets/images/pic4.jpg';
import img1 from '../assets/images/mug.jpg';
import img2 from '../assets/images/cc.jpg';
import teddy from '../assets/images/teddy.jpg'
import lamp from '../assets/images/lamp.jpg'
import spotify from '../assets/images/spotify.jpg'
import greeting  from '../assets/images/greeting.jpg'
import keychain from '../assets/images/keychain.jpg'
import frame from '../assets/images/frame.jpg'
import '../assets/css/combo.css'; 
import ANavbar from './Anavbar';
import ASidebar from './ASidebar';
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
const ACombo = () => {
  const birthdayCardsData = [
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
      imageUrl: img1,
      title: 'Happiest Birthday Cupcake Mug',
      description: 'Rs.399.00',
    },
    {
      imageUrl: img2,
      title: 'Personalised Choco Bar for Birthday',
      description: 'Rs.475.00',
    },
    {
        imageUrl: teddy,
        title: 'Personalised Happy Birthday Teddy',
        description: 'Rs.699.00 ' ,
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
      {
        imageUrl: img1,
        title: 'Happiest Birthday Cupcake Mug',
        description: 'Rs.399.00',
      },
  ];

  return (
    <div>
    <ANavbar/>
    <ASidebar/>
    <div className='bday-main'>
      <div style={backgroundStyle}>
        <div className='birthday-card-row'>
          {birthdayCardsData.map((card, index) => (
            <div key={index} className='birthday-card'>
              <img src={card.imageUrl} alt={card.title} className='birthday-card-image' />
              <h3 className='birthday-card-title'>{card.title}</h3>
              <p className='birthday-ca<button>Add Cart</button>rd-description'>{card.description}</p>
              <button style={{ fontSize: '20px', backgroundColor:'crimson', color: 'white' ,width:'200px',marginLeft:'30px'}}>Add Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ACombo;
