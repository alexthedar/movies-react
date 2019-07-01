import * as constants from "../constants";

export const setLoading = isFetching => {
  return {
    type: constants.SET_LOADING,
    isFetching
  };
};

export const setError = error => {
  return {
    type: constants.SET_ERROR,
    error
  };
};
