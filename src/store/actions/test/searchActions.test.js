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

  describe("fetchRefSymbols action creator", () => {
    it("should create an action to fetch stock symbols data", () => {
      actualResult = actions.fetchRefSymbols();
      expectedResult = {
        type: constants.GET_REF_SYMBOLS
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setRefSymbols action creator", () => {
    it("should create an action to set stock symbols data", () => {
      const refSymbols = ["test"];
      actualResult = actions.setRefSymbols(refSymbols);
      expectedResult = {
        type: constants.SET_REF_SYMBOLS,
        refSymbols
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setRefSymbolsFailure action creator", () => {
    it("should create an action to set stock symbols data error", () => {
      const error = "error";
      store.dispatch(actions.setRefSymbolsFailure(error));
      actualResult = store.getActions();
      expectedResult = [actions.setError(error.message)];
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("getRefSymbols action creator", () => {
    it("should set the ref symbols data in state", () => {
      iexGet.refDataSymbols.mockResolvedValue([{ symbol: "A" }]);

      return store.dispatch(actions.getRefSymbols()).then(() => {
        actualResult = store.getActions();
        expectedResult = [
          actions.fetchRefSymbols(),
          actions.setRefSymbols(["A"])
        ];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });

    it("should trigger failure actions creator if rejected", () => {
      iexGet.refDataSymbols.mockRejectedValue(error);

      return store.dispatch(actions.getRefSymbols()).then(() => {
        actualResult = store.getActions();
        expectedResult = [actions.setError(error.message)];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });
});
