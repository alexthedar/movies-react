import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as iexGet from "../../../api/iex-get";
import * as constants from "../../constants";
import * as actions from "../index";

const mockStore = configureStore([thunk]);
const store = mockStore({
  market: {
    marketTops: []
  }
});
const error = { message: "error" };
jest.mock("../../../api/iex-get");

describe("marketActions creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  describe("fetchMarketTop action creator", () => {
    it("should create an action to fetch Market Top data", () => {
      actualResult = actions.fetchMarketTop();
      expectedResult = {
        type: constants.GET_MARKET_TOP
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setMarketTopData action creator", () => {
    it("should create an action to set Market top data", () => {
      const marketTops = ["test"];
      actualResult = actions.setMarketTopData(marketTops);
      expectedResult = {
        type: constants.SET_MARKET_TOP,
        marketTops
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setMarketTopDataFailure action creator", () => {
    it("should create an action to set Market top error", () => {
      store.dispatch(actions.setRefSymbolsFailure(error));
      actualResult = store.getActions();
      expectedResult = [actions.setError(error.message)];
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("getMarketTops action creator", () => {
    it("should set the market tops data in state", () => {
      iexGet.topsData.mockResolvedValue(["data"]);

      return store.dispatch(actions.getMarketTops()).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.fetchMarketTop(),
          actions.setMarketTopData(["data"])
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      iexGet.topsData.mockRejectedValue(error);

      return store.dispatch(actions.getMarketTops()).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error.message)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });
});
