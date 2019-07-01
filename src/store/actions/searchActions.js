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
    return dispatch(actions.getMovieSearch({ queryString }));
  };
};

export const goToPage = newPage => {
  return (dispatch, getState) => {
    const { queryString } = getState().search;
    const { moviesList } = getState().movies;
    if (moviesList[newPage].length) {
      return dispatch(actions.setActivePage(newPage));
    } else {
      dispatch(actions.setLoading(true));
      return dispatch(actions.getNewPageMovieSearch({ queryString, newPage }));
    }
  };
};
