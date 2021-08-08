import { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
  useLocation,
  //   useRouteMatch,
} from "react-router-dom";
import { getMovieDetails } from "../../services/API";
import { toast } from "react-toastify";

const imageURL = "https://image.tmdb.org/t/p/w500/";

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(history);
  console.log(location);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //   const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId)
      .then((movie) => setMovie(movie))
      .catch(function (error) {
        toast.error(error);
      });
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
                src={imageURL + movie.poster_path}
                alt={movie.original_title}
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
          </div>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
