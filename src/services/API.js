import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "5d3faae6bdf27d6ad967dd7060912758",
  page: 1,
  language: "en-US",
};

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

async function getTrendingMovies() {
  const { data } = await axios
    .get("/trending/movie/day")
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMoviesBySearch(searchQuery) {
  const { data } = await axios
    .get("/search/movie?", {
      params: { query: searchQuery },
    })
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieDetails(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieCredits(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}/credits`)
    .then((data) => data);
  return data.cast;
}

async function getMovieReviews(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}/reviews`)
    .then((data) => data);
  return data.results;
}

export {
  getTrendingMovies,
  getMoviesBySearch,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  BASE_IMAGE_URL,
};
