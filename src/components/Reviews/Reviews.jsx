import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/Api';
// import PropTypes from 'prop-types';

import styles from '../Reviews/Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    getReviews(movieId)
      .then(response => {
        setReviews(response);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || reviews.length === 0) {
    return <p className={styles.errorMessage}>There are no reviews yet!</p>;
  }

  return (
    <div className={styles.reviewsDiv}>
      <ul>
        {reviews.map(review => (
          <li key={review.id} className={styles.listElementReviews}>
            <p className={styles.authorName}>{review.author}</p>
            <span className={styles.reviewContent}>{review.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;

// prop-types
