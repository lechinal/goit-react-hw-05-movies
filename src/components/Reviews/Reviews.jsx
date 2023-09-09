import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      <ul>
        {<p>There is no reviews yet</p> ||
          reviews.map(review => (
            <li key={review.id}>
              <p> Author: {review.author}</p>
              <span>{review.content}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Reviews;
