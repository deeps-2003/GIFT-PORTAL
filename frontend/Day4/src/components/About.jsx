import '../assets/css/about.css'; 
import bgimg from '../assets/images/pic4.jpg';
import Sidebar from './Sidebar';
import Navbar from './navbar';
const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '150%',
    background: `url(${bgimg}) center/cover no-repeat`,
    opacity: 1,
    zIndex: -1,
  };
const About = () => {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <div style={backgroundStyle}>
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Gift Cart, your go-to destination for creating unforgettable moments through personalized gifts. Our journey began with a simple idea: to transform the act of gift-giving into a meaningful and delightful experience.
        </p>
        <p>
          At the heart of Gift Cart is a team of passionate individuals who believe in the power of thoughtful gestures. We understand that each gift is an expression of love, care, and appreciation. That's why we've curated a collection of handpicked items that can be customized to tell your unique story.
        </p>
        <p>
          Our commitment to quality is unwavering. We source the finest materials and work with skilled artisans to ensure that every product surpasses your expectations. From the initial concept to the final creation, we pay meticulous attention to detail, ensuring that each item is a masterpiece in its own right.
        </p>
        <p>
          What makes Gift Cart special is the endless possibilities we offer for personalization. From names and dates to heartfelt messages and custom designs, we provide you with the tools to create gifts that resonate with the recipient on a deeply personal level.
        </p>
        <p>
          Thank you for choosing Gift Cart. Join us in the art of gifting, where every present is a symbol of love and connection. Explore our collection, and let us be your partner in making every moment special.
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default About;
