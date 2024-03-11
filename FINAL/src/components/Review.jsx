// Review.jsx

import  { useState } from 'react';
import '../assets/css/review.css';

const Review = () => {
  const [reviews] = useState([
    {
      id: 1,
      author: 'Surya',
      rating: 5,
      review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.',
    },
    {
      id: 2,
      author: 'Abisree',
      rating: 5,
      review: 'Amazing service! The personalized gift exceeded my expectations. Highly recommended.',
    },
    {
      id: 3,
      author: 'Dharani',
      rating: 4,
      review: 'Good product, but the delivery took a bit longer than expected. Overall, satisfied.',
    },
    {
      id: 4,
      author: 'Anusree',
      rating: 5,
      review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.',
    },
    {
      id: 5,
      author: 'Deepika',
      rating: 4,
      review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.',
    },
    {
      id: 6,
      author: 'Bhuvana',
      rating: 5,
      review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.',
    },
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          role="img"
          aria-label="star"
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-page">
      <div className="reviews-container">
        <h2>Customer Reviews</h2><br></br>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <h3>{review.author}</h3>
              <p>
                <strong>Rating:</strong> {renderStars(review.rating)}
              </p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
