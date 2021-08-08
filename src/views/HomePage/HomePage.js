import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getTrendingMovies } from "../../services/API";
import { toast } from "react-toastify";

const HomePage = () => {
  const { url } = useRouteMatch();
  const [trendingMoviesList, setTrendingMoviesList] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => setTrendingMoviesList(results))
      .catch(function (error) {
        toast.error(error);
      });
  }, []);

  return (
    <div>
      {trendingMoviesList && (
        <ul>
          {trendingMoviesList.map((trendingMoviesItem) => (
            <li key={trendingMoviesItem.id}>
              <Link to={`${url}/${trendingMoviesItem.id}`}>
                {trendingMoviesItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
