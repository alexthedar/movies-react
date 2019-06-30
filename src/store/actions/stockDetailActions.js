import * as constants from "../constants";
import * as actions from "./index";
import * as iexGet from "../../api/iex-get";

export const fetchSymbolQuotes = () => {
  return {
    type: constants.GET_SYMBOL_QUOTES
  };
};

export const fetchSymbolLogo = () => {
  return {
    type: constants.GET_SYMBOL_LOGO
  };
};

export const fetchSymbolNews = () => {
  return {
    type: constants.GET_SYMBOL_NEWS
  };
};

export const fetchSymbolCompanyInfo = () => {
  return {
    type: constants.GET_SYMBOL_COMPANY_INFO
  };
};

export const setSymbolQuotes = quotes => {
  return {
    type: constants.SET_SYMBOL_QUOTES,
    quotes
  };
};

export const setSymbolLogo = logo => {
  return {
    type: constants.SET_SYMBOL_LOGO,
    logo
  };
};

export const setSymbolNews = news => {
  return {
    type: constants.SET_SYMBOL_NEWS,
    news
  };
};

export const setSymbolCompanyInfo = companyInfo => {
  return {
    type: constants.SET_SYMBOL_COMPANY_INFO,
    companyInfo
  };
};

export const setStockSymbol = stockSymbol => {
  return {
    type: constants.SET_STOCK_SYMBOL,
    stockSymbol
  };
};

export const setSymbolFailure = error => {
  return dispatch => {
    return dispatch(actions.setError(error.message));
  };
};

export const getSymbolQuotes = symbol => {
  return dispatch =>
    Promise.resolve(iexGet.quotesForSymbol(symbol))
      .then(res => {
        dispatch(fetchSymbolQuotes());
        return dispatch(setSymbolQuotes(res));
      })
      .catch(error => dispatch(setSymbolFailure(error)));
};

export const getSymbolLogo = symbol => {
  return dispatch =>
    Promise.resolve(iexGet.logoForSymbol(symbol))
      .then(res => {
        dispatch(fetchSymbolLogo());
        return dispatch(setSymbolLogo(res.url));
      })
      .catch(error => dispatch(setSymbolFailure(error)));
};

export const getSymbolNews = symbol => {
  return dispatch =>
    Promise.resolve(iexGet.recentNewsForSymbol(symbol))
      .then(res => {
        dispatch(fetchSymbolNews());
        return dispatch(setSymbolNews(res));
      })
      .catch(error => dispatch(setSymbolFailure(error)));
};

export const getSymbolCompanyInfo = symbol => {
  return dispatch =>
    Promise.resolve(iexGet.companyInfoForSymbol(symbol))
      .then(res => {
        dispatch(fetchSymbolCompanyInfo());
        return dispatch(setSymbolCompanyInfo(res));
      })
      .catch(error => dispatch(setSymbolFailure(error)));
};
