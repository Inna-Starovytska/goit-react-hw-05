import axios from "axios";

const url = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzBiOGM5OTU3ZmEwMzdmYmZjMDRlYThmYWI1YzdkMyIsIm5iZiI6MTcyNjQyMzA2NS4wNDIxMzksInN1YiI6IjY2ZTcxZGVkZDdiY2NhNTI0ZGIwYjAyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CL0pVkF8jc7evuROGVx7-P6PJkYAWzpvwkb1HdNWB7w",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${url}/trending/movie/day`, options);
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${url}/movie/${movieId}`, options);
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get(
    `${url}/search/movie?query=${query}`,
    options
  );
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${url}/movie/${movieId}/credits`, options);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${url}/movie/${movieId}/reviews`, options);
  return response.data;
};
