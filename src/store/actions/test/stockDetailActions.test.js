import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as iexGet from "../../../api/iex-get";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  market: {
    quotes: [],
    logo: null,
    news: [],
    companyInfo: [],
    stockSymbol: ""
  }
});
const error = { message: "error" };

jest.mock("../../../api/iex-get");

describe("stockDetail creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  // FETCH
  describe("fetchSymbolQuotes action creator", () => {
    it("should create an action to fetch stock quotes for symbol", () => {
      actualResult = actions.fetchSymbolQuotes();
      expectedResult = {
        type: constants.GET_SYMBOL_QUOTES
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("fetchSymbolLogo action creator", () => {
    it("should create an action to fetch stock logo for symbol", () => {
      actualResult = actions.fetchSymbolLogo();
      expectedResult = {
        type: constants.GET_SYMBOL_LOGO
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("fetchSymbolNews action creator", () => {
    it("should create an action to fetch news for symbol", () => {
      actualResult = actions.fetchSymbolNews();
      expectedResult = {
        type: constants.GET_SYMBOL_NEWS
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("fetchSymbolCompanyInfo action creator", () => {
    it("should create an action to fetch company info for symbol", () => {
      actualResult = actions.fetchSymbolCompanyInfo();
      expectedResult = {
        type: constants.GET_SYMBOL_COMPANY_INFO
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  // SET
  describe("setSymbolQuotes action creator", () => {
    it("should create an action to set stock quotes for symbol", () => {
      const quotes = ["test"];
      actualResult = actions.setSymbolQuotes(quotes);
      expectedResult = {
        type: constants.SET_SYMBOL_QUOTES,
        quotes
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setSymbolLogo action creator", () => {
    it("should create an action to set stock logo for symbol", () => {
      const logo = "test";
      actualResult = actions.setSymbolLogo(logo);
      expectedResult = {
        type: constants.SET_SYMBOL_LOGO,
        logo
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setSymbolNews action creator", () => {
    it("should create an action to set news for symbol", () => {
      const news = ["test"];
      actualResult = actions.setSymbolNews(news);
      expectedResult = {
        type: constants.SET_SYMBOL_NEWS,
        news
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setSymbolCompanyInfo action creator", () => {
    it("should create an action to set company info for symbol", () => {
      const companyInfo = ["test"];
      actualResult = actions.setSymbolCompanyInfo(companyInfo);
      expectedResult = {
        type: constants.SET_SYMBOL_COMPANY_INFO,
        companyInfo
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setStockSymbol action creator", () => {
    it("should create an action to set stock symbol", () => {
      const stockSymbol = "test";
      actualResult = actions.setStockSymbol(stockSymbol);
      expectedResult = {
        type: constants.SET_STOCK_SYMBOL,
        stockSymbol
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  // FAILURE
  describe("setSymbolFailure action creator", () => {
    it("should create an action to set symbol data error", () => {
      store.dispatch(actions.setSymbolFailure(error));
      actualResult = store.getActions();
      expectedResult = [actions.setError(error.message)];
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  // GET
  describe("getSymbolQuotes action creator", () => {
    it("should set the quotes data in state", () => {
      const quotes = ["test"];
      iexGet.quotesForSymbol.mockResolvedValue(quotes);

      return store.dispatch(actions.getSymbolQuotes()).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.fetchSymbolQuotes(),
          actions.setSymbolQuotes(quotes)
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      iexGet.quotesForSymbol.mockRejectedValue(error);

      return store.dispatch(actions.getSymbolQuotes()).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error.message)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });

  describe("getSymbolLogo action creator", () => {
    it("should set the logo data in state", () => {
      iexGet.logoForSymbol.mockResolvedValue({ url: "url" });

      return store.dispatch(actions.getSymbolLogo()).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.fetchSymbolLogo(),
          actions.setSymbolLogo("url")
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      iexGet.logoForSymbol.mockRejectedValue(error);

      return store.dispatch(actions.getSymbolLogo()).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error.message)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });

  describe("getSymbolNews action creator", () => {
    it("should set the news data in state", () => {
      iexGet.recentNewsForSymbol.mockResolvedValue(["test"]);

      return store.dispatch(actions.getSymbolNews()).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.fetchSymbolNews(),
          actions.setSymbolNews(["test"])
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      iexGet.recentNewsForSymbol.mockRejectedValue(error);

      return store.dispatch(actions.getSymbolNews()).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error.message)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });

  describe("getSymbolCompanyInfo action creator", () => {
    it("should set the ref symbols data in state", () => {
      iexGet.companyInfoForSymbol.mockResolvedValue(["test"]);

      return store.dispatch(actions.getSymbolCompanyInfo()).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.fetchSymbolCompanyInfo(),
          actions.setSymbolCompanyInfo(["test"])
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      iexGet.companyInfoForSymbol.mockRejectedValue(error);

      return store.dispatch(actions.getSymbolCompanyInfo()).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error.message)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });
});
