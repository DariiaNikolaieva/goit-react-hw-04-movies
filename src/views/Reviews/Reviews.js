import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ReviewList from "../../components/ReviewList/ReviewList";
import { getMovieReviews } from "../../services/API";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then((data) => {
      if (data.length === 0) {
        toast.error("We don't have any reviews for this movie");
        return;
      }
      setReviews(data);
    });
  }, [movieId]);

  return <ReviewList reviews={reviews} />;
};

export default Reviews;
