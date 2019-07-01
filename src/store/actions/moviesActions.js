import * as constants from "../constants";
import * as actions from "./index";
import * as movieDb from "../../api/moviedb";

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

export const getMovies = ({ queryString, activePage }) => {
  return dispatch => {
    dispatch(fetchMovies());
    return Promise.resolve(movieDb.get({ queryString, activePage }))
      .then(res => {
        dispatch(actions.setActivePage(res.page));
        dispatch(actions.setTotalPages(res.total_pages));
        return dispatch(setMoviesList(res.results));
      })
      .catch(error => dispatch(actions.setError(error)));
  };
};
