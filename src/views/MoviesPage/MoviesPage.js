import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMoviesBySearch } from "../../services/API";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    getMoviesBySearch(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error("Try again");
        return;
      }
      setMovies(results);
    });
  }, [query]);

  const onSubmit = (query) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
