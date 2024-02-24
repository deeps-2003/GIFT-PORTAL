
import '../assets/css/review.css';
import bgimg1 from '../assets/images/pic4.jpg';
import Sidebar from './Sidebar';
import Navbar from './navbar';


const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '150%',
  background: `url(${bgimg1}) center/cover no-repeat`,
  opacity: 1,
  zIndex: -1, 
};

const Review = () => {
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      rating: 4,
      review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.'
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 5,
      review: 'Amazing service! The personalized gift exceeded my expectations. Highly recommended.'
    },
    {
      id: 3,
      author: 'Bob Johnson',
      rating: 3,
      review: 'Good product, but the delivery took a bit longer than expected. Overall, satisfied.'
    },
    {
        id: 1,
        author: 'John Doe',
        rating: 4,
        review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.'
      },
      {
        id: 1,
        author: 'John Doe',
        rating: 4,
        review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.'
      },
      {
        id: 1,
        author: 'John Doe',
        rating: 4,
        review: 'The customized gift was beautiful! I loved the attention to detail and the quick delivery.'
      },
  ];

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div style={backgroundStyle}></div> 
      <div className="review-page">
        <h2>Customer Reviews</h2>
        <br></br>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <h3>{review.author}</h3>
              <p><strong>Rating:</strong> {review.rating}</p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
