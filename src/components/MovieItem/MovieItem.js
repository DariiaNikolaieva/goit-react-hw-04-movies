import { Link, useLocation } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location },
        }}
      >
        {movie.title}
      </Link>
    </li>
  );
};

export default MovieItem;
