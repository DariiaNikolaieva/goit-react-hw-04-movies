import { Link, useLocation } from "react-router-dom";
import styles from "./MovieItem.module.css";

const MovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li className={styles.item}>
      <Link
        className={styles.link}
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
