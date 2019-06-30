import * as constants from "../constants";
import * as actions from "./index";
import * as iexGet from "../../api/iex-get";

const extractNameAndSymbols = iexRefData => {
  return iexRefData.map(({ symbol }) => symbol);
};

export const fetchRefSymbols = () => {
  return {
    type: constants.GET_REF_SYMBOLS
  };
};

export const setRefSymbols = refSymbols => {
  return {
    type: constants.SET_REF_SYMBOLS,
    refSymbols
  };
};

export const setRefSymbolsFailure = error => {
  return dispatch => {
    return dispatch(actions.setError(error.message));
  };
};

export const getRefSymbols = () => {
  return dispatch =>
    Promise.resolve(iexGet.refDataSymbols())
      .then(res => {
        dispatch(fetchRefSymbols());
        return dispatch(setRefSymbols(extractNameAndSymbols(res)));
      })
      .catch(error => dispatch(setRefSymbolsFailure(error)));
};
