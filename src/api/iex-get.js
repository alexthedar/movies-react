import axios from "axios";

// https://api.themoviedb.org/3/trending/all/day?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0

const baseURL = "https://api.iextrading.com/1.0";
// const baseURL = "https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key='057dfa32a18eed0f2dc23dc2e80ed8a0'";
const movieDbBaseURL = "https://api.themoviedb.org/3";
const apiKey = "057dfa32a18eed0f2dc23dc2e80ed8a0";
// const baseURL = `https://api.themoviedb.org/3/&api_key=${apiKey}`;
//
// query
//

// export const search = (searchString) => {
// export const refDataSymbols = (searchString) => {
//   const url = `${baseURL}&query=raider`;
//   // const url = `${baseURL}/&query=${searchString}`;
//   console.log(url);

//   return fetch(url)
//   .then(res => Promise.resolve(res.json()))
//     .catch(error => Promise.reject(error));
// };
//
// reference
//

// export const refDataSymbols = () => {
//   const url = `${baseURL}/ref-data/symbols`;
//   return fetch(url)
//   .then(res => Promise.resolve(res.json()))
//     .catch(error => Promise.reject(error));
// };
export const get = () => {
  return axios
    .get(`${movieDbBaseURL}${}?api_key=${apiKey}`)
    .then(function(response) {
      // handle success
      console.log("HERE", response);
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

//
// details
//

export const quotesForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/quote`;
  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const logoForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/logo`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const recentNewsForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/news`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const companyInfoForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/company`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

//
// market
//

export const topsData = symbol => {
  const url = symbol ? `${baseURL}/tops?symbols=${symbol}` : `${baseURL}/tops`;
  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};
