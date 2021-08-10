import { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { getMovieDetails, BASE_IMAGE_URL } from "../../services/API";
import styles from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName:"cast"*/));
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName:"reviews"*/)
);

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then(
      ({ poster_path, original_title, vote_average, overview }) =>
        setMovie({ poster_path, original_title, vote_average, overview })
    );
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {movie && (
        <>
          <button className={styles.button} type="button" onClick={onGoBack}>
            &#8592; Go Back
          </button>
          <div>
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
                    {/* {movie.genres.map((genre) => genre.name).join(" / ")} */}
                  </span>
                </p>
              </div>
            </div>
            <p className={styles.link}>Additional Information</p>
            <nav>
              <NavLink className={styles.link} to={`${url}/cast`}>
                Cast
              </NavLink>
              <NavLink className={styles.link} to={`${url}/reviews`}>
                Reviews
              </NavLink>
            </nav>
            <Suspense>
              <Switch>
                <Route path={`${path}/cast`}>
                  <Cast />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
