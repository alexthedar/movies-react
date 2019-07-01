import * as constants from "../constants";
import * as actions from "./index";
import * as iexGet from "../../api/iex-get";
import * as movieDb from "../../api/moviedb";

export const fetchMovies = () => {
  return {
    type: constants.GET_MOVIES
  };
};

export const setMoviesData = movies => {
  return {
    type: constants.SET_MOVIES,
    movies
  };
};

export function setMoviesFailure(error) {
  return dispatch => {
    return dispatch(actions.setError(error.message));
  };
}


export const fetchMarketTop = () => {
  return {
    type: constants.GET_MARKET_TOP
  };
};

export const setMarketTopData = marketTops => {
  return {
    type: constants.SET_MARKET_TOP,
    marketTops
  };
};

export function setMarketTopDataFailure(error) {
  return dispatch => {
    return dispatch(actions.setError(error.message));
  };
}

export const getMarketTops = () => {
  return dispatch =>
    Promise.resolve(iexGet.topsData())
      .then(res => {
        dispatch(fetchMarketTop());
        return dispatch(setMarketTopData(res.reverse()));
      })
      .catch(error => dispatch(setMarketTopDataFailure(error)));
};

export const getMovies = (path, options) => {
  return dispatch =>
    Promise.resolve(movieDb.get(path, options))
      .then(res => {
        console.log("actions", res);
        dispatch(fetchMovies());
        return dispatch(setMoviesData(res));
      })
      .catch(error => dispatch(setMoviesFailure(error)));
};
