import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMoviesBySearch } from "../../services/API";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageHeading from "../../components/PageHeading/PageHeading";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    getMoviesBySearch(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error("There are no results. Try another query");
        return;
      }
      setMovies(results);
      toast.success("Movies on your query");
    });
  }, [query]);

  const onSubmit = (query) => {
    setQuery(query);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <PageHeading text={query} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
