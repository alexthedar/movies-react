import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const imageBaseURL = "https://image.tmdb.org/t/p/";
const key = "api_key=057dfa32a18eed0f2dc23dc2e80ed8a0";

//
// API Paths
//

const getMoviesPath = (path, options) => {
  switch (path) {
    case "popularMovie":
      return `/movie/popular?${key}`;
    case "topRatedMovie":
      return `/movie/top_rated?${key}`;
    case "similarMovie":
      return `/movie/${options.movieId}/similar?${key}`;
    case "searchMovie":
      return `/search/movie?${key}&query=${options.query}`;
    case "nowPlayingMovie":
      return `/movie/now_playing?${key}`;
    default:
      return `/movie/now_playing?${key}`;
  }
};

//
// get
//
export const get = (path, options) => {
  const url = `${baseURL}${getMoviesPath(path, options)}`;
  return axios
    .get(url)
    .then(function(response) {
      console.log("HERE", response.data.results);
      return response.data.results;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
      console.log("FINISHED");
    });
};

export const getImage = (path, options) => {
  return `${imageBaseURL}${getImageSize(options)}${path}`;
};
