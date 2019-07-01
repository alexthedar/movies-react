import axios from "axios";
import * as constants from "../constants";
import * as actions from "./index";

const baseURL = "https://api.themoviedb.org/3";
const key = "?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0";
const languageFlag = "&language=en-US";
const adultFlag = "&include_adult=false";
const pageFlag = "&page=";
const queryFlag = "&query=";
const searchPath = "/search/movie";

const searchURL = ({ queryString, activePage = 1 }) =>
  `${baseURL}${searchPath}${key}${languageFlag}${queryFlag}${queryString}${pageFlag}${activePage}${adultFlag}`;

export const fetchMovies = () => {
  return {
    type: constants.GET_MOVIES_LIST
  };
};

export const setMoviesList = movies => {
  return {
    type: constants.SET_MOVIES_LIST,
    movies
  };
};

export const getMovieSearch = ({ queryString }) => {
  return dispatch => {
    dispatch(fetchMovies());
    return axios
      .get(searchURL({ queryString }))
      .then(res => {
        dispatch(actions.setActivePage(res.data.page));
        dispatch(actions.setTotalPages(res.data.total_pages));
        // make object of empty arrays = to total pages
        const moviesListObj = {};
        for (let i = 1; i <= res.data.total_pages; i++) {
          moviesListObj[i] = [];
        }
        // set empty array of page # to results
        moviesListObj[res.data.page] = res.data.results;
        dispatch(setMoviesList(moviesListObj));
        return dispatch(actions.setLoading(false));
      })
      .catch(error => dispatch(actions.setError(error)));
  };
};

export const getNewPageMovieSearch = ({ queryString, newPage }) => {
  return (dispatch, getState) => {
    const { moviesList } = getState().movies;
    dispatch(fetchMovies());
    return axios
      .get(searchURL({ queryString, activePage: newPage }))
      .then(res => {
        dispatch(actions.setActivePage(res.data.page));
        moviesList[res.data.page] = res.data.results;
        dispatch(setMoviesList(moviesList));
        return dispatch(actions.setLoading(false));
      })
      .catch(error => dispatch(actions.setError(error.message)));
  };
};
