import { expect } from "chai";
import marketReducer, { initialState } from "../marketReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(marketReducer(undefined, {})).to.deep.equal({
      marketTops: []
    });
  });

  it("should react to SET_MARKET_TOP action", () => {
    action = actions.setMarketTopData(["test"]);
    actualResult = marketReducer(initialState, action);
    expectedResult = {
      ...initialState,
      marketTops: ["test"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
