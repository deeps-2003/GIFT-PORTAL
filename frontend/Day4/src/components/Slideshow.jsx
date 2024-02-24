import  { useState, useEffect } from 'react';
import '../assets/css/slideshow.css';
import ss1 from '../assets/images/slide5.jpg';
import ss2 from '../assets/images/slide6.jpg';
import ss3 from '../assets/images/slide 4.jpg';
import ss4 from '../assets/images/slide5.jpg';
import ss5 from '../assets/images/slide6.jpg'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, imageUrl: ss1, caption: 'Slide 1' },
    { id: 2, imageUrl: ss2, caption: 'Slide 2' },
    { id: 3, imageUrl: ss3, caption: 'Slide 3' },
    { id: 4, imageUrl: ss4, caption: 'Slide 4' },
    { id: 5, imageUrl: ss5, caption: 'Slide 5' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 
    return () => clearInterval(interval); 
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </div>

      {/* <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button> */}
    </div>
  );
};

export default Slideshow;
