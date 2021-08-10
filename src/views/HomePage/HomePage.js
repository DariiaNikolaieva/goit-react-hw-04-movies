import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/API";
import MoviesList from "../../components/MoviesList/MoviesList";
import PageHeading from "../../components/PageHeading/PageHeading";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
