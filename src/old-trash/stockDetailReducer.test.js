import { expect } from "chai";
import stockDetailReducer, { initialState } from "./stockDetailReducer";
import * as actions from "../store/actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(stockDetailReducer(undefined, {})).to.deep.equal({
      quotes: [],
      logo: null,
      news: [],
      companyInfo: [],
      stockSymbol: ""
    });
  });

  it("should react to SET_SYMBOL_LOGO", () => {
    action = actions.setStockSymbol("symbol");
    actualResult = stockDetailReducer(initialState, action);
    expectedResult = {
      ...initialState,
      stockSymbol: "symbol"
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it("should react to SET_SYMBOL_NEWS", () => {
    action = actions.setSymbolNews(["news"]);
    actualResult = stockDetailReducer(initialState, action);
    expectedResult = {
      ...initialState,
      news: ["news"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it("should react to SET_SYMBOL_COMPANY_INFO", () => {
    action = actions.setSymbolCompanyInfo(["companyInfo"]);
    actualResult = stockDetailReducer(initialState, action);
    expectedResult = {
      ...initialState,
      companyInfo: ["companyInfo"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it("should react to SET_STOCK_SYMBOL", () => {
    action = actions.setStockSymbol("symbol");
    actualResult = stockDetailReducer(initialState, action);
    expectedResult = {
      ...initialState,
      stockSymbol: "symbol"
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
