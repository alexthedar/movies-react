import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const key = "api_key=057dfa32a18eed0f2dc23dc2e80ed8a0";

//
// get
//

export const get = query => {
  const url = !query
    ? `${baseURL}/movie/top_rated?${key}`
    : `${baseURL}/search/movie?${key}&query=${query}`;
  console.log("TCL: url", url);
  return axios
    .get(url)
    .then(function(response) {
      console.log("HERE", response.data);
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
