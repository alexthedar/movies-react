import axios from "axios";
import * as constants from "../constants";
import * as actions from "./index";

export const baseURL = "https://api.themoviedb.org/3";
export const key = `?api_key=${process.env.REACT_APP_API_KEY}`;
export const languageFlag = "&language=en-US";
export const adultFlag = "&include_adult=false";
export const pageFlag = "&page=";
export const queryFlag = "&query=";
export const searchPath = "/search/movie";

export const searchURL = ({ queryString, activePage = 1 }) =>
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
        const moviesListObj = {};
        dispatch(actions.setTotalPages(res.data.total_pages));
        // set empty array of page # to results
        moviesListObj[res.data.page] = res.data.results;
        dispatch(setMoviesList(moviesListObj));
        dispatch(actions.setActivePage(res.data.page));
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
        // add array of results with page as key to movie store list obj
        moviesList[res.data.page] = res.data.results;
        dispatch(setMoviesList(moviesList));
        dispatch(actions.setActivePage(res.data.page));
        return dispatch(actions.setLoading(false));
      })
      .catch(error => dispatch(actions.setError(error)));
  };
};
