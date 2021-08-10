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
          <button type="button" onClick={onGoBack}>
            Go Back
          </button>
          <div>
            <div>
              <img
                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                alt={movie.original_title}
                width="250"
              />
              <div>
                <h2>{movie.original_title}</h2>
                <p>
                  User score: <span>{movie.vote_average}</span>
                </p>
                <p>
                  Overview: <span>{movie.overview}</span>
                </p>
                <p>
                  Genres: <span>{movie.genres}</span>
                </p>
              </div>
            </div>
            <nav>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
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
