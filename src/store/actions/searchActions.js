import * as constants from "../constants";
import * as actions from "../actions/index";

export const setQueryString = queryString => {
  return {
    type: constants.SET_QUERY_STRING,
    queryString
  };
};

export const setActivePage = activePage => {
  return {
    type: constants.SET_ACTIVE_PAGE,
    activePage
  };
};

export const setTotalPages = totalPages => {
  return {
    type: constants.SET_TOTAL_PAGES,
    totalPages
  };
};

export const searchMovies = queryString => {
  return dispatch => {
    dispatch(setQueryString(queryString));
    return dispatch(actions.getMovies({ queryString }));
  };
};

export const goToPage = pageNumber => {};
