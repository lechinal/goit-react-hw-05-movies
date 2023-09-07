import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e24364bf426e805ddb941f7bf77328d9';

// trending
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// search-movies
export const fetchMovieById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data.results;
};

// get-movie-details
export const fetchMovieDetails = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  return response.data.results;
};

// get-movie-credits
export const fetchMovieCredits = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  return response.data.results;
};

// get-movie-reviews
export const fetchMoviesReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data.results;
};

// get-movie-genres
export const fetchGenres = async () => {
  const response = await axios.get(`/genre/movie/list?api_key = ${API_KEY}`);
  return response.data.results;
};

// get-movie-cast
export const fetchMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};
