const ReviewItem = ({ review }) => {
  return (
    <li>
      <h4>Author: {review.author}</h4>
      <p>{review.content}</p>
    </li>
  );
};

export default ReviewItem;
