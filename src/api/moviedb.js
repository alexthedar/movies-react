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

const getPosterSize = (size) => {
  switch (size) {
    case "xs":
      return "w92";
    case "sm":
      return `w185`;
    case "md":
      return "w342";
    case "lg":
      return "w500";
    case "xl":
      return "w780";
    default:
      return "original";
  }
}

const getStillSize = (size) => {
  switch (size) {
    case "sm":
      return "w92";
    case "md":
      return `w185`;
    case "lg":
      return "w300";
    default:
      return "original";
  }
}

const getBackdropSize = (size) => {
  switch (size) {
    case "sm":
      return "w300";
    case "md":
      return "w780";
    case "lg":
      return "w1280";
    default:
      return "original";
  }
}

const getImageSize = (options) => {
  switch (options.type) {
    case "poster":
      return getPosterSize(options.size);
    case "still":
      return getStillSize(options.size);
    case "backdrop":
      return getBackdropSize(options.size);
    default:
      return getPosterSize(options.size);
  }
}



//
// get
//
export const get = (path, options) => {
  const url = `${baseURL}${getMoviesPath(path, options)}`;
  return axios
    .get(url)
    .then(function(response) {
      console.log("HERE", response.data.results);
      return response.data.results
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

