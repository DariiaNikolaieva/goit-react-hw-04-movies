import MovieItem from "../MovieItem/MovieItem";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MoviesList;
