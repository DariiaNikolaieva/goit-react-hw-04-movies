import { BASE_IMAGE_URL } from "../../services/API";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movie_card}>
      <img
        className={styles.image}
        src={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt={movie.original_title}
        width="250"
      />
      <div className={styles.movie_info}>
        <h2>{movie.original_title}</h2>
        <p className={styles.info_item}>
          User score:
          <span className={styles.info_sum}>{movie.vote_average}</span>
        </p>
        <p className={styles.info_item}>
          Overview:
          <span className={styles.info_sum}>{movie.overview}</span>
        </p>
        <p className={styles.info_item}>
          Genres:
          <span className={styles.info_sum}>
            {movie.genres.map((genre) => genre.name).join(" / ")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
