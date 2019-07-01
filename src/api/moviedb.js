import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const key = "?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0";
const languageFlag = "&language=en-US";
const adultFlag = "&include_adult=false";
const pageFlag = "&page=";
const queryFlag = "&query=";
// const topRatedPath = "/movie/top_rated";
const searchPath = "/search/movie";

// const topRated = activePage =>
//   `${baseURL}${topRatedPath}${key}${languageFlag}${pageFlag}${activePage}`;

const search = (queryString, activePage) =>
  `${baseURL}${searchPath}${key}${languageFlag}${queryFlag}${queryString}${pageFlag}${activePage}${adultFlag}`;

export const get = ({ queryString, activePage = 1 }) => {
  console.log("TCL: get -> queryString, activePage", queryString, activePage);
  const url = search(queryString, activePage);
  console.log("TCL: url", url);
  return axios
    .get(url)
    .then(function(response) {
      console.log("HERE", response.data);
      return response.data;
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
