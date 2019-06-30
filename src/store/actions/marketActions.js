import * as constants from "../constants";
import * as actions from "./index";
import * as iexGet from "../../api/iex-get";

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
