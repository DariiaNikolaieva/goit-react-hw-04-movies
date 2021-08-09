import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "5d3faae6bdf27d6ad967dd7060912758";

async function getTrendingMovies() {
  const { data } = await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMoviesBySearch(searchQuery, page = 1) {
  const { data } = await axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}include_adult=false`
    )
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieDetails(movieId) {
  const { data } = await axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieCredits(movieId) {
  const { data } = await axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .catch(function (error) {
      toast.error(error);
    });
  return data.cast;
}

async function getMovieReviews(movieId, page = 1) {
  const { data } = await axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .catch(function (error) {
      toast.error(error);
    });
  return data.results;
}

export {
  getTrendingMovies,
  getMoviesBySearch,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
