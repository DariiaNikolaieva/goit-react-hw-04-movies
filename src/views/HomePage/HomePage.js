import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/API";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default HomePage;
