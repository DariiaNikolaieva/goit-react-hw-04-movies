import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../../components/ReviewList/ReviewList";
import { getMovieReviews } from "../../services/API";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then((data) => setReviews(data));
  }, [movieId]);

  return <ReviewList reviews={reviews} />;
};

export default Reviews;
