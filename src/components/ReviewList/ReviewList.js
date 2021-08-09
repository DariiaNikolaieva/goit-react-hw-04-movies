import ReviewItem from "../ReviewItem/ReviewItem";

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
};

export default ReviewList;
