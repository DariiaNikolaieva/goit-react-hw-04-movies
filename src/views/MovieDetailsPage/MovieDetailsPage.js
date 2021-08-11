import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieAddInfo from "../../components/MovieAddInfo/MovieAddInfo";
import { getMovieDetails } from "../../services/API";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={onGoBack}>
        &#8592; Go Back
      </button>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <MovieAddInfo />
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
