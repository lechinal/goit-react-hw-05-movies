import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e24364bf426e805ddb941f7bf77328d9';

// const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });

export const getTrendingMovies = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieById = async id => {
  const res = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data;
};

export const getMoviesByQuery = async query => {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  return res.data.results;
};

export const getCast = async id => {
  const res = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return res.data.cast;
};

export const getReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data.results;
};

// export const getReviews = async id => {
//   const res = await movieApi.get(`/movie/${id}/reviews`, {
//     params: {
//       API_KEY: 'e24364bf426e805ddb941f7bf77328d9',
//     },
//   });
//   return res.data;
// };

export const getUserScore = async id => {
  const res = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data.vote_average;
};

export const getGenresById = async id => {
  const res = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data.genres;
};
